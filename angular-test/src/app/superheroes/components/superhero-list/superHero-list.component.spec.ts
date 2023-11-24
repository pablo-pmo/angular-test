import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroListComponent } from './superHero-list.component';
import { SuperHeroesModule } from '../../superHeroes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SuperHeroListComponent', () => {
  let component: SuperHeroListComponent;
  let fixture: ComponentFixture<SuperHeroListComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SuperHeroesModule, BrowserAnimationsModule],
      declarations: [SuperHeroListComponent]
    });
    fixture = TestBed.createComponent(SuperHeroListComponent);
    element = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create 3 app-superherores', () => {
    expect(element.querySelectorAll('app-superhero')).toHaveSize(3);
  });

  it('should filter out every hero except two', () => {
    const filter: HTMLInputElement = element.querySelector('app-superhero-filter mat-form-field input')!;
    filter.value = 'rm';
    filter.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(element.querySelectorAll('app-superhero')).toHaveSize(2);
  });

  it('should filter out every hero', () => {
    const filter: HTMLInputElement = element.querySelector('app-superhero-filter mat-form-field input')!;
    filter.value = 'nobody';
    filter.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(element.querySelectorAll('app-superhero')).toHaveSize(0);
  });

  it('should filter out every hero, then reset to normal', () => {
    const filter: HTMLInputElement = element.querySelector('app-superhero-filter mat-form-field input')!;
    filter.value = 'nobody';
    filter.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(element.querySelectorAll('app-superhero')).toHaveSize(0);
    const button: HTMLButtonElement = element.querySelector('app-superhero-filter mat-card-actions button')!;
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(element.querySelectorAll('app-superhero')).toHaveSize(3);
  });
});
