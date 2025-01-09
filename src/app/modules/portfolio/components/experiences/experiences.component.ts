import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/Experiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Software Developer at CITi",
        p: "Creating digital solutions through technology.",
      },
      text: "<p>Personal and technical development: Within CITi, I have the opportunity to connect with various people and explore a wide range of technologies.</p><p>Experience in dealing with clients: Since CITi provides a service, I have the opportunity to interact directly with clients and strive to understand their needs in order to offer the best possible solution.</p>",
    },
    {
      summary: {
        strong: "Gold Medal in Olympiad",
        p: "Pernambuco Olympiad of Informatics (OPEI).",
      },
      text: "<p>It is an annual scientific competition aimed at stimulating programming logic and opening doors to competitive programming, involving students of all ages.</p><p>I competed in the Senior Practical category, which involves university students, and was awarded the gold medal, which recognized not only my effort but also my passion for Computer Science.</p>",
    },
    {
      summary: {
        strong: "Teaching Assistant for Algorithms and Data Structures",
        p: "Centro de Informática - UFPE",
      },
      text: "<p>Theoretical and practical guidance in the study and development of various algorithms and data structures.</p><p>Assisting in the study of programming languages such as Java, C, and Python, and Object-Oriented Programming concepts.</p>",
    },

  ]);
}
