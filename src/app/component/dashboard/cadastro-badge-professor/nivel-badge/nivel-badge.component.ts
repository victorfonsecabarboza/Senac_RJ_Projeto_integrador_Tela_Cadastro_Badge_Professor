import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel-badge',
  templateUrl: './nivel-badge.component.html',
  styleUrls: ['./nivel-badge.component.css']
})
export class NivelBadgeComponent {
  nivelbadge: string[] = ['Nível 1', 'Nível 2', 'Nível 3'];
  tipobadge: string[] = ['Aluno', 'Situação Aprendizagem', 'Fórum'];
}
