import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SuperHero } from '../../interfaces/superHero';

@Component({
  selector: 'app-superhero-form',
  templateUrl: './superHero-form.component.html',
  styleUrls: ['./superHero-form.component.scss']
})
export class SuperHeroFormComponent {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  public superHero!: SuperHero;

  @Input()
  public addOrModify!: boolean;

  public superHeroForm: FormGroup = this.formBuilder.group({
    alias: [this.superHero?.alias, Validators.required],
    actualName: [this.superHero?.actualName, Validators.required],
    city: [this.superHero?.city, Validators.required],
    age: [this.superHero?.age, Validators.compose([Validators.required, Validators.min(18)])],
  });

  @Output()
  addHero: EventEmitter<SuperHero> = new EventEmitter();

  clickAdition(): void {
    this.addHero.emit(this.superHero);
  }

}
