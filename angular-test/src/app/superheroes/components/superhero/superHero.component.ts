import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faUserSecret, faCakeCandles, faLocationDot, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SuperHero } from '../../interfaces/superHero';


@Component({
  selector: 'app-superhero',
  templateUrl: './superHero.component.html',
  styleUrls: ['./superHero.component.scss']
})
export class SuperHeroComponent {

  public faLocationDot = faLocationDot;
  public faUserSecret = faUserSecret;
  public faCakeCandles = faCakeCandles;
  public faPenToSquare = faPenToSquare;
  public faTrash = faTrash;

  @Input()
  public superHero: SuperHero = {
    id: 1,
    alias: 'Spiderman',
    actualName: 'Peter Parker',
    city: 'NY',
    age: 25
  }

  @Output()
  deleteSuperHero: EventEmitter<SuperHero> = new EventEmitter();

  clickDeletion(): void {
    this.deleteSuperHero.emit(this.superHero);
  }

  @Output()
  editSuperHero: EventEmitter<SuperHero> = new EventEmitter();

  clickEdition(): void {
    this.editSuperHero.emit(this.superHero);
  }

}
