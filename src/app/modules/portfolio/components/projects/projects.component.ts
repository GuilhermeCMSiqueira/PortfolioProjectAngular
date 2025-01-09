import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/Projects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog= inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/LogoSite.png',
      alt: 'VetMart',
      title: 'VetMart',
      width: '160px',
      height: '51px',
      description: 'VetMart is an e-commerce specialized in veterinary products, offering a wide variety of items for pet care, including food, medications, toys, and accessories. Our goal is to provide a convenient and reliable shopping experience for pet lovers, ensuring high-quality products and excellent customer service.',
      links: [
        {
          name: 'Visit the site',
          href: 'https://www.vetmart.com.br',
        }
      ]
    },
    {
      src: 'assets/img/projects/chess.png',
      alt: 'ChessBoard',
      title: 'Java ChessMatch',
      width: '100px',
      height: '69px',
      description: 'ChessMatch is a Java project that simulates a chess game using Object-Oriented Programming (OOP) principles. The project is designed to model the various components of a chess game, including the board, pieces, and rules. Each piece is represented as a class with its own movement logic, and the board is a grid of squares that can hold pieces. The game enforces the rules of chess, such as valid moves, check, and checkmate, through a series of methods and interactions between objects. This project demonstrates the power of OOP by encapsulating the behavior and attributes of chess elements, promoting code reusability and maintainability.',
      links: [
        {
          name: 'Get to know the project',
          href: 'https://www.linkedin.com/posts/guilherme-siqueira-421345150_programaaexaetoorientadaaobjetos-java-desenvolvimentodesoftware-activity-7183496157103284224-LtKC?utm_source=share&utm_medium=member_desktop',
        }
      ]
    },
    
  ])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
