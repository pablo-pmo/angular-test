import { Component } from '@angular/core';
import { SuperHero } from '../../interfaces/superHero';
import { SuperHeroesService } from '../../services/superHeroes.service';
import { MatDialog } from '@angular/material/dialog';
import { DeletionDialogComponent } from '../deletion-dialog/deletion-dialog.component';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superHero-list.component.html',
  styleUrls: ['./superHero-list.component.scss']
})
export class SuperHeroListComponent {

  public superHeroes: SuperHero[] = this.superHeroesService.getSuperHeroes();

  constructor(private superHeroesService: SuperHeroesService, private dialog: MatDialog) { }

  public currentSuperHero: SuperHero = this.restartCurrentSuperHero();

  restartCurrentSuperHero(): SuperHero {
    return this.currentSuperHero = {
      id: this.superHeroesService.getLastId(),
      alias: '',
      actualName: '',
      city: '',
      age: 18
    }
  }

  askDelitionConfirmation(heroClicked: SuperHero): void {
    const dialogRef = this.dialog.open(DeletionDialogComponent, { data: heroClicked.alias });
    dialogRef.afterClosed().subscribe(res => {
      if (!res) return;
      this.superHeroesService.deleteSuperHero(heroClicked.id);
    })
  }

  onFilterHeroes(filterTerm: string): void {
    this.superHeroes = this.superHeroesService.getSuperHeroesByName(filterTerm);
  }

  onDeleteSuperHero(heroClicked: SuperHero): void {
    this.askDelitionConfirmation(heroClicked);
  }

  onEditSuperHero(heroClicked: SuperHero): void {
    this.superHeroesService.getSuperHeroById(heroClicked.id)!.age++;
  }

  onAddHero(heroAdded: SuperHero): void {
    this.superHeroesService.addSuperHero(heroAdded);
    this.restartCurrentSuperHero();
  }

}
