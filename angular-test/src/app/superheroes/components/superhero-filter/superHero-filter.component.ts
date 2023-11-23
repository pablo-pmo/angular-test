import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-superhero-filter',
  templateUrl: './superHero-filter.component.html',
  styleUrls: ['./superHero-filter.component.scss']
})
export class SuperHeroFilterComponent {

  public filterTerm: FormControl = new FormControl('');

  @Output()
  filterHeroes: EventEmitter<string> = new EventEmitter();

  filterSuperHeroes(): void {
    this.filterHeroes.emit(this.filterTerm.value);
  }

  resetFilter(): void {
    this.filterTerm.setValue('');
    this.filterSuperHeroes();
  }

}
