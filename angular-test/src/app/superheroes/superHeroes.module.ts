import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SuperHeroComponent } from './components/superhero/superHero.component';
import { SuperHeroListComponent } from './components/superhero-list/superHero-list.component';
import { DeletionDialogComponent } from './components/deletion-dialog/deletion-dialog.component';
import { SuperHeroFormComponent } from './components/superhero-form/superHero-form.component';
import { SuperHeroFilterComponent } from './components/superhero-filter/superHero-filter.component';



@NgModule({
  declarations: [
    SuperHeroComponent,
    SuperHeroListComponent,
    DeletionDialogComponent,
    SuperHeroFormComponent,
    SuperHeroFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    FontAwesomeModule
  ],
  exports: [
    SuperHeroListComponent
  ]
})
export class SuperHeroesModule { }
