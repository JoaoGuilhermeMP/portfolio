import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import emailjs from 'emailjs-com';  

@Component({
  selector: 'portfolio-contact',
  imports: [FormsModule],
  templateUrl: './portfolio-contact.component.html',
  styleUrl: './portfolio-contact.component.css'
})
export class PortfolioContactComponent {

  private serviceID = 'service_x67c0rp';   
  private templateID = 'template_zlipfsk'; 
  private userID = '9El7Q5uwMIZaTVeRs';         

  constructor() {}

  onSubmit(form: any) {
    debugger
    const formData = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    };

    
    emailjs.send(this.serviceID, this.templateID, formData, this.userID)
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response);
        form.reset()
        
      })
      .catch((error) => {
        console.error('Erro ao enviar o e-mail:', error);
        
      });
  }

}
