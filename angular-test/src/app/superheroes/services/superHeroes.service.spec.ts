import { TestBed } from '@angular/core/testing';

import { SuperHeroesService } from './superHeroes.service';
import { SuperHero } from '../interfaces/superHero';


describe('SuperHeroesService', () => {
  let service: SuperHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getSuperHeroes() | should start with 8 superheroes', () => {
    expect(service.getSuperHeroes()).toHaveSize(8);
  });

  it('getSuperHeroById() | should return a superhero called SPIDERMAN with id 1', () => {
    expect(service.getSuperHeroById(1)?.alias).toEqual('Spiderman');
  });

  it('getSuperHeroesByName() | should return 4 heroes containing "man" in their name', () => {
    expect(service.getSuperHeroesByName('man')).toHaveSize(4);
  });

  it('getSuperHeroesByName() | should return no hero containing "hello"', () => {
    expect(service.getSuperHeroesByName('hello')).toHaveSize(0);
  });

  it('addSuperHero() | should add superhero', () => {
    const superHero: SuperHero = {
      alias: 'BasicMan',
      age: 30,
      actualName: 'John Doe',
      city: 'NY'
    };
    service.addSuperHero(superHero);
    expect(service.getSuperHeroById(9)?.actualName).toEqual('John Doe');
  });

  it('addSuperHero() | should add 2 superheros', () => {
    const superHero1: SuperHero = {
      alias: 'First Man',
      age: 18,
      actualName: 'Don Primero',
      city: 'AA'
    };
    const superHero2: SuperHero = {
      alias: 'Second Man',
      age: 19,
      actualName: 'Don Segundo',
      city: 'BB'
    };
    service.addSuperHero(superHero1);
    service.addSuperHero(superHero2);
    expect(service.getSuperHeroById(9)?.actualName).toEqual('Don Primero');
    expect(service.getSuperHeroById(10)?.city).toEqual('BB');
  });

  it('deleteSuperHero() | should delete a superhero', () => {
    service.deleteSuperHero(1);
    expect(service.getSuperHeroById(1)).toBeUndefined();
    expect(service.getSuperHeroes()).toHaveSize(7);
  });

  it('deleteSuperHero() | should delete 2 superheros', () => {
    service.deleteSuperHero(1);
    service.deleteSuperHero(3);
    expect(service.getSuperHeroById(1)).toBeUndefined();
    expect(service.getSuperHeroById(2)?.actualName).toEqual('Bruce Wayne');
    expect(service.getSuperHeroById(3)).toBeUndefined();
    expect(service.getSuperHeroes()).toHaveSize(6);
  });

  it('deleteSuperHero() | should delete no superhero', () => {
    service.deleteSuperHero(9);
    expect(service.getSuperHeroes()).toHaveSize(8);
  });

  it('modifySuperHero() | should modify superhero', () => {
    expect(service.getSuperHeroById(1)?.alias).toEqual('Spiderman');
    const superHero = service.getSuperHeroById(1)!;
    const newAlias = 'Just PP';
    superHero.alias = newAlias;
    service.modifySuperHero(superHero);
    expect(service.getSuperHeroById(1)?.alias).toEqual(newAlias);
  });
});
