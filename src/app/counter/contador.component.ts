


  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'aplicación-contador',
    template: '<h1>Hola Counter</h1>'
  })

  export class CounterComponent  {

    public counter: number = 10;

  public increaseBy( value:number): void {
    //this.counter = this.counter + 1;
    this.counter += value;

  }
    //ecreaseBy() {
    //this.counter = this.counter + 1;
    //this.counter -= 1;



   resetCounter() {
    this.counter = 10;
  }
  }
