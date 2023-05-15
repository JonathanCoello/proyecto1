import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `<h1> App Bielera</h1>
  <h3>Counter:{{counter}}</h3>
<button (click)="this.increaseBy(+1)">+1</button>
<button (click)="resetCounter()">Reset</button>

<button (click)="increaseBy(-1)">-1</button>



  `
})


export class  CounterComponent
{
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
