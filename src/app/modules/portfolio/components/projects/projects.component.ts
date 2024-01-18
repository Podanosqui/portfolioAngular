import { Component, inject, signal } from '@angular/core';

// Interface
import { iProjects } from '../../interface/iProjects.interface';

// Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<iProjects[]>([
    {
      src:'assets/img/projects/pokedex.png',
      alt: "Projeto Pokedex em Angular",
      title: "Pokedex em Angular",
      width: '51px',
      height: '51px',
      description: "Esse projeto funciona como uma Pokedex, a qual te permite Adicionar, Editar e Excluir um Pokémon. Login e Senha: Admin",
      links: [
        {
          name: 'Conheça a Pokedex',
          href: '#',
        },
      ],
    },
  ]);

  public openDialog(data: iProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
