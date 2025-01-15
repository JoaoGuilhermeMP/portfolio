import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PortfolioHeaderComponent } from "./portfolio-header/portfolio-header.component";
import { PortfolioAboutComponent } from "./portfolio-about/portfolio-about.component";
import { PortfolioHomeComponent } from "./portfolio-home/portfolio-home.component";
import { PortfolioMySkillsComponent } from "./portfolio-my-skills/portfolio-my-skills.component";
import { PortfolioContactComponent } from "./portfolio-contact/portfolio-contact.component";
import { PortfolioFooterComponent } from "./portfolio-footer/portfolio-footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PortfolioHeaderComponent, PortfolioAboutComponent, PortfolioHomeComponent, PortfolioMySkillsComponent, PortfolioContactComponent, RouterModule, PortfolioFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
}
