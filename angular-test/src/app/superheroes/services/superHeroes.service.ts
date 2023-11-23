import { Injectable, numberAttribute } from '@angular/core';
import { SuperHero } from '../interfaces/superHero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroesService {

  private superheroes: SuperHero[] = [{
    id: 1,
    alias: 'Spiderman',
    actualName: 'Peter Parker',
    age: 25,
    city: 'NY'
  }, {
    id: 2,
    alias: 'Batman',
    actualName: 'Bruce Wayne',
    age: 35,
    city: 'Gotham'
  },];

  constructor() { }

  getSuperHeroes(): SuperHero[] {
    return this.superheroes;
  }

  getSuperHeroIndexById(key: number): number {
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
    return this.superheroes.reduce((max: SuperHero, current: SuperHero) => max.id > current.id ? max : current).id + 1;
  }

  addSuperHero(superHero: SuperHero): void {
    this.superheroes.push(superHero);
  }
}
