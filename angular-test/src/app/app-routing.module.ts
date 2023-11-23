import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperHeroListComponent } from './superheroes/components/superhero-list/superHero-list.component';
import { SuperHeroFormComponent } from './superheroes/components/superhero-form/superHero-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: SuperHeroListComponent },
  { path: 'edit/:id', component: SuperHeroFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
