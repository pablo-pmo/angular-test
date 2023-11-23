import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroModificationComponent } from './superHero-modification.component';

describe('SuperHeroModificationComponent', () => {
  let component: SuperHeroModificationComponent;
  let fixture: ComponentFixture<SuperHeroModificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperHeroModificationComponent]
    });
    fixture = TestBed.createComponent(SuperHeroModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
