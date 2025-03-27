
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
 
  color = 1;
  handleColor(val:number){
   this.color = val
  }

  handleInput(event:Event){
    this.color = parseInt((event.target as HTMLInputElement).value)

  }
}



