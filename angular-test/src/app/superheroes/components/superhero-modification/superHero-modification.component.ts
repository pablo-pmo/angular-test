import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { SuperHero } from '../../interfaces/superHero';
import { SuperHeroesService } from '../../services/superHeroes.service';

@Component({
  selector: 'app-superhero-modification',
  templateUrl: './superHero-modification.component.html',
  styleUrls: ['./superHero-modification.component.scss']
})
export class SuperHeroModificationComponent {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private superHeroService: SuperHeroesService,
    private location: Location
  ) { }

  public id: number = +this.route.snapshot.paramMap.get('id')!;

  public superHero: SuperHero = this.superHeroService.getSuperHeroById(this.id)!;

  public superHeroForm: FormGroup = this.formBuilder.group({
    alias: [this.superHero.alias, Validators.required],
    actualName: [this.superHero.actualName, Validators.required],
    city: [this.superHero.city, Validators.required],
    age: [this.superHero.age, Validators.compose([Validators.required, Validators.min(18)])],
  });

  modifyHero(): void {
    this.superHeroService.modifySuperHero({ id: this.id, ... this.superHeroForm.value });
  }

  goBack(): void {
    this.location.back();
  }

}
