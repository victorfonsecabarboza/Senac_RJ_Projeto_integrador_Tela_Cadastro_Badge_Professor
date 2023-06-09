import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBadgeComponent } from './tipo-badge.component';

describe('TipoBadgeComponent', () => {
  let component: TipoBadgeComponent;
  let fixture: ComponentFixture<TipoBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoBadgeComponent]
    });
    fixture = TestBed.createComponent(TipoBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
