import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelBadgeComponent } from './nivel-badge.component';

describe('NivelBadgeComponent', () => {
  let component: NivelBadgeComponent;
  let fixture: ComponentFixture<NivelBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelBadgeComponent]
    });
    fixture = TestBed.createComponent(NivelBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
