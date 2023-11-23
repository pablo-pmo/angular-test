import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperHeroListComponent } from './superheroes/components/superhero-list/superHero-list.component';
import { SuperHeroModificationComponent } from './superheroes/components/superhero-modification/superHero-modification.component';
import { SuperHeroAdditionComponent } from './superheroes/components/superhero-addition/superhero-addition.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: SuperHeroListComponent },
  { path: 'edit/:id', component: SuperHeroModificationComponent },
  { path: 'create', component: SuperHeroAdditionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
