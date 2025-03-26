import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'portfolio-home',
  imports: [FontAwesomeModule],
  templateUrl: './portfolio-home.component.html',
  styleUrl: './portfolio-home.component.css'
})
export class PortfolioHomeComponent {

  iconDownload = faDownload;

  downloadCV(): void {
    const cvUrl = 'assets/CV2.pdf'; 
    const cvName = 'Joao_Guilherme_CV.pdf';
    saveAs(cvUrl, cvName);
  }
}
