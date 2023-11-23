import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroComponent } from './superHero.component';

describe('SuperHeroComponent', () => {
  let component: SuperHeroComponent;
  let fixture: ComponentFixture<SuperHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperHeroComponent]
    });
    fixture = TestBed.createComponent(SuperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
