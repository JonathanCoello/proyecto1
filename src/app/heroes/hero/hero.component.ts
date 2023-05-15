import { Component } from '@angular/core';


//hace la  referencia  a cada  componente
@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

  public name: string = 'Cerveza Club';
  public name1: string = 'Cerverza Pilsener';
  public name2: string = 'Cerveza Artesanal';
  public name3: string = 'Cerverza Alemana';
  public age: number = 45;

  get capitalizeName(): string{
    return this.name.toUpperCase(); ///metodo string de JavaScript
  }

  public getHeroDescription(): string {
    this.getHeroDescription
    return `${this.name} - ${this.age}`;
}

  changeHero():void{
    this.name = 'Cervez Club Pemium'

  }

  changeAge() {
    this.age !== 25;

  }

  resetForm(): void {
    //this.name = 'iroman';
    this.age = 45;

    document.querySelectorAll('h1')!.forEach(
      elemento => {
        elemento.innerHTML = '<h1> Desde Angular</h1>';

      }
    )
  }
}
