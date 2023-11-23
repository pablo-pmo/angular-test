import { Injectable, numberAttribute } from '@angular/core';
import { SuperHero } from '../interfaces/superHero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroesService {

  private id: number = 0;

  private superheroes: SuperHero[] = [{
    id: ++this.id,
    alias: 'Spiderman',
    actualName: 'Peter Parker',
    age: 25,
    city: 'NY'
  }, {
    id: ++this.id,
    alias: 'Batman',
    actualName: 'Bruce Wayne',
    age: 35,
    city: 'Gotham'
  }, {
    id: ++this.id,
    alias: 'Superman',
    actualName: 'Clark Kent',
    age: 35,
    city: 'Metropolis'
  }, {
    id: ++this.id,
    alias: 'Wolverine',
    actualName: 'Lobito',
    age: 35,
    city: 'DC'
  }, {
    id: ++this.id,
    alias: 'Iron Man',
    actualName: 'Tony Stark',
    age: 35,
    city: 'NY'
  }, {
    id: ++this.id,
    alias: 'Captain America',
    actualName: 'Steve Rogers',
    age: 35,
    city: 'MCU'
  }, {
    id: ++this.id,
    alias: 'Doctor Strange',
    actualName: 'Steve Strange',
    age: 45,
    city: 'Multiverse'
  }, {
    id: ++this.id,
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

  modifySuperHero(id: number, superheroe: SuperHero): void {
    let currentSuperhero = this.getSuperHeroById(id);
    currentSuperhero = { ...superheroe }
  }

  deleteSuperHero(id: number) {
    this.superheroes.splice(this.getSuperHeroIndexById(id), 1);
  }

  getLastId(): number {
    return this.id++;
  }

  addSuperHero(superHero: SuperHero): void {
    this.superheroes.push(superHero);
  }
}
