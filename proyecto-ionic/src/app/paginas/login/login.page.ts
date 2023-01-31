import { Component, OnInit } from '@angular/core';
import { FireBaseService } from 'src/app/servicio/fire-base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  

  constructor(private firebase:FireBaseService) { }

  ngOnInit() {
  }

  async onRegister(email, password){
    try{
      const user = await this.firebase.register(email.value, password.value);
      if(user){
        console.log('Usuario->', user);
        
      }

    }catch(error){console.log('Error', error)}
  }

  async onLogin(email, password){
    try{
      const user = await this.firebase.login(email.value, password.value);
      if(this.firebase.isEmailVerificado(user)){
        document.getElementById('boton-acceso').innerHTML='Activado';
        document.getElementById('boton-acceso').setAttribute('disabled', 'false');

      }

    }catch(error){console.log('Error', error)}
  }

}
