import { Component,  } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzservices: DbzService){

  }
  get characters():Character[]{
    return [...this.dbzservices.characters];
  }

  onDeleteCharacter(id: string):void{
    this.dbzservices.deleteCharacterById(id);
  }

  onNewCharacter(character: Character):void{
    this.dbzservices.addCharacter(character);

  }


}
