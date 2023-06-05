import { Component, OnDestroy, OnInit } from '@angular/core';

import { IProduct } from '../product';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-shell-list',
  templateUrl: './product-shell-list.component.html'
})
export class ProductShellListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  products: IProduct[] = [];
  errorMessage = '';
  selectedProduct: IProduct | null;
  subSelected: Subscription;
  subGetProduct: Subscription;

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.subSelected = this.productService.selectedProductChanges$.subscribe(
      selectedProduct => this.selectedProduct = selectedProduct
    );

    this.subGetProduct = this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });
  }

  onSelected(product: IProduct): void {
    this.productService.changeSelectedProduct(product);
  }

  ngOnDestroy(): void {
    this.subSelected.unsubscribe();
    this.subGetProduct.unsubscribe();
  }

}
