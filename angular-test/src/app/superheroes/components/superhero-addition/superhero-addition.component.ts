import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { SuperHeroesService } from '../../services/superHeroes.service';

@Component({
  selector: 'app-superhero-addition',
  templateUrl: './superhero-addition.component.html',
  styleUrls: ['./superhero-addition.component.scss']
})
export class SuperHeroAdditionComponent {

  constructor(
    private formBuilder: FormBuilder,
    private superHeroService: SuperHeroesService,
    private location: Location
  ) { }

  public id: number = this.superHeroService.getLastId();

  public superHeroForm: FormGroup = this.formBuilder.group({
    alias: ['Basic Man', Validators.required],
    actualName: ['John Doe', Validators.required],
    city: ['NY', Validators.required],
    age: [18, Validators.compose([Validators.required, Validators.min(18)])],
  });

  addHero(): void {
    this.superHeroService.addSuperHero({ id: ++this.id, ... this.superHeroForm.value });
  }

  goBack(): void {
    this.location.back();
  }


}
