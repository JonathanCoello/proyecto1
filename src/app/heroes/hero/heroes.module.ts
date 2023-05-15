import
 { NgModule } from '@angular/core';
import { HeroComponent } from './hero.component';
import { ListComponent } from '../list/list.component';
import { ListaComponent } from '../lista/lista.component';



@NgModule({

  exports: [
    HeroComponent,
    ListComponent,
    ListaComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent,
    ListaComponent
  ],
})
export  class HeroesModule { }
