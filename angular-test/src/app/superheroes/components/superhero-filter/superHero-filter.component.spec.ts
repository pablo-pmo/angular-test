import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroFilterComponent } from './superHero-filter.component';

describe('SuperHeroFilterComponent', () => {
  let component: SuperHeroFilterComponent;
  let fixture: ComponentFixture<SuperHeroFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperHeroFilterComponent]
    });
    fixture = TestBed.createComponent(SuperHeroFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
