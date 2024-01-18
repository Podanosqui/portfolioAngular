import { Component, signal } from '@angular/core';

// Interfaces
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Scrum Master / Agile Coach',
        p: 'Undefined | 09/2023 - 12/2023'
      },
      text: '<p>Atuei como Scrum Master na Undefined onde gerenciava um time de Desenvolvimento e um time de UX/UI. Todas as tarefas e reuniões eram realizadas no Home Office.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor Front End Jr',
        p: 'Undefined | 01/2024 - Atualmente'
      },
      text: '<p>Assim que o ano se iniciou, fui convidado a atuar na área de Desenvolvimento, de início atuando em pequenos projetos para aprendizado e, em seguida, atuando em produtos internos e projetos reais. Atualmente utilizo das bibliotecas JS de React e Angular em minhas principais atividades.</p>',
    },
  ]);
}
