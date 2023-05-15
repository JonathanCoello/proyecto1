import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  public heroNames: string[] =['Persona Natural', 'Candidato', 'Organización Politica','Organización'];

  public deleteHero?: string;


  removeLastHero(): void  {
   this.deleteHero =  this.heroNames.pop();
    //console.log ({deleteHero} )

}
}

