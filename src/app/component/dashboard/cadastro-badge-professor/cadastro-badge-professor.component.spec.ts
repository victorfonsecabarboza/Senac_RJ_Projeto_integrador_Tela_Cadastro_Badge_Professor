import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBadgeProfessorComponent } from './cadastro-badge-professor.component';

describe('CadastroBadgeProfessorComponent', () => {
  let component: CadastroBadgeProfessorComponent;
  let fixture: ComponentFixture<CadastroBadgeProfessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroBadgeProfessorComponent]
    });
    fixture = TestBed.createComponent(CadastroBadgeProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
