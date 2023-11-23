import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroFormComponent } from './superHero-form.component';

describe('SuperHeroFormComponent', () => {
  let component: SuperHeroFormComponent;
  let fixture: ComponentFixture<SuperHeroFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperHeroFormComponent]
    });
    fixture = TestBed.createComponent(SuperHeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
