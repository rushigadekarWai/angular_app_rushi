
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent, SignUpComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  
  count:number = 0;
  name:string = 'rushikesh'

  handleIncrement(){
    this.count += 1;

  }

  handleDecrement(){
    this.count = this.count - 1;
  }

  handleRest(){
    this.count = 0
  }

  handleCounter(val:string){
    if(val === 'minus'){
      this.count = this.count - 1;
    }
    else if(val === 'plus'){
      this.count += 1;

    }
    else{
      this.count = 0

    }
  }



}



