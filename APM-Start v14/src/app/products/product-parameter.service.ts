import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductParameterService implements OnDestroy {
  showImage: boolean;
  filterBy: string = '';
  
  constructor() { 
    console.log("The productParameterService created");
  }

  ngOnDestroy(): void {
    console.log("The productParameterService destroyed");
  }
}
