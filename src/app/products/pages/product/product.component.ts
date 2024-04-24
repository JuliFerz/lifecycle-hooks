import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product',
  templateUrl: './product.component.html',
  styles: ``
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {
    console.log('constructor');
  }

  encreasePrice() {
    this.currentPrice++;
  }

  // Para primera carga HTTP (usualmente para cargar datos)
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  // Para determinar cuál fue el cambio y determinar qué hacer
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log({ changes })
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
