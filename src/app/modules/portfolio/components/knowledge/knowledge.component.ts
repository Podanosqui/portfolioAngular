import { Component, signal } from '@angular/core';

// Interface
import { iKnowledge } from '../../interface/iKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.css'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal <iKnowledge[]> ([
    {
      src: 'assets/icons/knowledge/html5.png',
      alt: 'Ícone HTML5',
    },
    {
      src: 'assets/icons/knowledge/css3.png',
      alt: 'Ícone CSS3',
    },
    {
      src: 'assets/icons/knowledge/javascript.png',
      alt: 'Ícone JavaScript',
    },
    {
      src: 'assets/icons/knowledge/react.png',
      alt: 'Ícone React',
    },
    {
      src: 'assets/icons/knowledge/angular.png',
      alt: 'Ícone Angular',
    },
  ]);
}
