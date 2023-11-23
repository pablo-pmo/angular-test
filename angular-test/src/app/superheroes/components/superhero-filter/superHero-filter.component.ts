import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-superhero-filter',
  templateUrl: './superHero-filter.component.html',
  styleUrls: ['./superHero-filter.component.scss']
})
export class SuperHeroFilterComponent {

  constructor() {
    this.filterTerm.valueChanges.subscribe(newValue => this.filterHeroes.emit(newValue));
  }

  public filterTerm: FormControl = new FormControl('');

  @Output()
  filterHeroes: EventEmitter<string> = new EventEmitter();

  resetFilter(): void {
    this.filterTerm.setValue('');
  }

}
