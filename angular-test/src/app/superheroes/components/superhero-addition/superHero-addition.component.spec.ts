import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroAdditionComponent } from './superhero-addition.component';

describe('SuperHeroAdditionComponent', () => {
  let component: SuperHeroAdditionComponent;
  let fixture: ComponentFixture<SuperHeroAdditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperHeroAdditionComponent]
    });
    fixture = TestBed.createComponent(SuperHeroAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
