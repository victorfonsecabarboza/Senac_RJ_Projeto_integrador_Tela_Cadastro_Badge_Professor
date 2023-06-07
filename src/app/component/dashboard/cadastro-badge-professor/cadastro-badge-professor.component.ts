import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-badge-professor',
  templateUrl: './cadastro-badge-professor.component.html',
  styleUrls: ['./cadastro-badge-professor.component.css']
})
export class CadastroBadgeProfessorComponent {
  nivelbadge: string[] = ['Nível 1', 'Nível 2', 'Nível 3'];
  tipobadge: string[] = ['Aluno', 'Situação Aprendizagem', 'Fórum'];
}
