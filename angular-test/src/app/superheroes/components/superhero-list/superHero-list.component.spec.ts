import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroListComponent } from './superHero-list.component';

describe('SuperHeroListComponent', () => {
  let component: SuperHeroListComponent;
  let fixture: ComponentFixture<SuperHeroListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperHeroListComponent]
    });
    fixture = TestBed.createComponent(SuperHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
