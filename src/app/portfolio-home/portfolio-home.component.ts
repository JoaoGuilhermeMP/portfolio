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
    const cvUrl = 'assets/CV3.pdf';
    const cvName = 'Joao_Guilherme_Machado_Palma_CV.pdf';
    saveAs(cvUrl, cvName);
  }
}
