import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SuperHero } from '../../interfaces/superHero';
import { SuperHeroesService } from '../../services/superHeroes.service';

@Component({
  selector: 'app-superhero-form',
  templateUrl: './superHero-form.component.html',
  styleUrls: ['./superHero-form.component.scss']
})
export class SuperHeroFormComponent {

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private superHeroService: SuperHeroesService) { }

  public superHero: SuperHero = this.superHeroService.getSuperHeroById(+this.route.snapshot.paramMap.get('id')!)!;

  // public superHeroForm: FormGroup = this.formBuilder.group({
  //   alias: [this.superHero?.alias, Validators.required],
  //   actualName: [this.superHero?.actualName, Validators.required],
  //   city: [this.superHero?.city, Validators.required],
  //   age: [this.superHero?.age, Validators.compose([Validators.required, Validators.min(18)])],
  // });

  // @Output()
  // addHero: EventEmitter<SuperHero> = new EventEmitter();

  // clickAdition(): void {
  //   this.addHero.emit(this.superHero);
  // }

}
