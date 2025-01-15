import { Component, Input } from '@angular/core';

@Component({
  selector: 'skills-card',
  imports: [],
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.css'
})
export class SkillsCardComponent {

  @Input() icon: any;
  @Input() Skills: any;

}
