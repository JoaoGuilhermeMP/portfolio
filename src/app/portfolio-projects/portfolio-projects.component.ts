import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'portfolio-projects',
  imports: [FontAwesomeModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.css'
})
export class PortfolioProjectsComponent {

  iconGithub = faGithub;

}
