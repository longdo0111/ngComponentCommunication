import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() displayDetail: boolean;
  @Input() hitCount: number | undefined;
  hitMessage: string;
  @Output() valueChange: EventEmitter<string> = 
    new EventEmitter<string>();

  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.valueChange.emit(value);
  }
  
  @ViewChild('filterElement') filterElementRef: ElementRef;

  constructor() {
    console.log("fitler component init")
   }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    if (changes['hitCount'] && !changes['hitCount'].currentValue) {
      this.hitMessage = 'Not match found';
    } else {
      this.hitMessage = 'Hits: ' + this.hitCount;
    }
  }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(this.filterElementRef) {
      this.filterElementRef.nativeElement.focus();
    }    
  }

}
