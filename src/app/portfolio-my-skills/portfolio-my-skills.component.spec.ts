import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMySkillsComponent } from './portfolio-my-skills.component';

describe('PortfolioMySkillsComponent', () => {
  let component: PortfolioMySkillsComponent;
  let fixture: ComponentFixture<PortfolioMySkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioMySkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioMySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
