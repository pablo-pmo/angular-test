import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

import { SuperHeroesService } from '../../services/superHeroes.service';
import { SuperHero } from '../../interfaces/superHero';
import { DeletionDialogComponent } from '../deletion-dialog/deletion-dialog.component';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superHero-list.component.html',
  styleUrls: ['./superHero-list.component.scss']
})
export class SuperHeroListComponent {

  constructor(private superHeroesService: SuperHeroesService, private dialog: MatDialog) { }

  public superHeroes: SuperHero[] = this.superHeroesService.getSuperHeroes();

  public pagOptions = [3, 5, 10];

  public pagStart: number = 0;

  public pagItems: number = this.pagOptions[0];

  restartPagination(): void {
    this.pagStart = 0;
    this.pagItems = this.pagOptions[0];
  }

  changePagination(event: PageEvent): void {
    this.pagItems = event.pageSize;
    this.pagStart = event.pageIndex;
  }

  askDelitionConfirmation(heroClicked: SuperHero): void {
    const dialogRef = this.dialog.open(DeletionDialogComponent, { data: heroClicked.alias });
    dialogRef.afterClosed().subscribe(res => {
      if (!res) return;
      this.superHeroesService.deleteSuperHero(heroClicked.id!);

      if (this.pagStart === 0 || this.pagStart * this.pagItems < this.superHeroes.length) return;
      this.pagStart--;
    })
  }

  onFilterHeroes(filterTerm: string): void {
    this.superHeroes = this.superHeroesService.getSuperHeroesByName(filterTerm);
    this.restartPagination();
  }

  onDeleteSuperHero(heroClicked: SuperHero): void {
    this.askDelitionConfirmation(heroClicked);
  }

}
