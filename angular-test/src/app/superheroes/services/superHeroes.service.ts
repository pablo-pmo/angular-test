import { Injectable, numberAttribute } from '@angular/core';
import { SuperHero } from '../interfaces/superHero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroesService {

  private id: number = 0;

  private superheroes: SuperHero[] = [{
    id: this.getLastId(),
    alias: 'Spiderman',
    actualName: 'Peter Parker',
    age: 25,
    city: 'NY'
  }, {
    id: this.getLastId(),
    alias: 'Batman',
    actualName: 'Bruce Wayne',
    age: 35,
    city: 'Gotham'
  }, {
    id: this.getLastId(),
    alias: 'Superman',
    actualName: 'Clark Kent',
    age: 35,
    city: 'Metropolis'
  }, {
    id: this.getLastId(),
    alias: 'Wolverine',
    actualName: 'Lobito',
    age: 35,
    city: 'DC'
  }, {
    id: this.getLastId(),
    alias: 'Iron Man',
    actualName: 'Tony Stark',
    age: 35,
    city: 'NY'
  }, {
    id: this.getLastId(),
    alias: 'Captain America',
    actualName: 'Steve Rogers',
    age: 35,
    city: 'MCU'
  }, {
    id: this.getLastId(),
    alias: 'Doctor Strange',
    actualName: 'Steve Strange',
    age: 45,
    city: 'Multiverse'
  }, {
    id: this.getLastId(),
    alias: 'Venom',
    actualName: 'Eddie Brock',
    age: 25,
    city: 'SCU'
  },];

  getSuperHeroes(): SuperHero[] {
    return this.superheroes;
  }

  private getSuperHeroIndexById(key: number): number {
    return this.superheroes.findIndex(({ id }) => key === id);
  }

  getSuperHeroById(id: number): SuperHero | undefined {
    const index = this.getSuperHeroIndexById(id);
    return index === -1 ? undefined : this.superheroes.at(index);
  }

  getSuperHeroesByName(query: string): SuperHero[] {
    return this.superheroes.filter(({ alias }) => alias.toUpperCase().includes(query.toUpperCase()));
  }

  modifySuperHero(superheroe: SuperHero): void {
    const index = this.getSuperHeroIndexById(superheroe.id!);
    if (index === -1) return;
    this.superheroes[index] = { ...superheroe };
  }

  deleteSuperHero(id: number) {
    const index = this.getSuperHeroIndexById(id);
    if (index === -1) return;
    this.superheroes.splice(index, 1);
  }

  private getLastId(): number {
    return ++this.id;
  }

  addSuperHero(superHero: SuperHero): void {
    this.superheroes.push({ id: this.getLastId(), ...superHero });
  }
}
