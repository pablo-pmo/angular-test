import { TestBed } from '@angular/core/testing';

import { SuperHeroesService } from './superHeroes.service';


describe('SuperheroesService', () => {
  let service: SuperHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
