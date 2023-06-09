import { Component } from '@angular/core';

@Component({
  selector: 'app-tipo-badge',
  templateUrl: './tipo-badge.component.html',
  styleUrls: ['./tipo-badge.component.css']
})
export class TipoBadgeComponent {
  tipobadge: string[] = ['Aluno', 'Situação Aprendizagem', 'Fórum'];
  situacaoaprendizagem: string[] = ['Nível 1', 'Nível 2', 'Nível 3'];
}
