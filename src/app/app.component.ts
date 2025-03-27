
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
 
  color='';
  displayColor = ''
  handleColor(color:string){
    this.color = color;

  }
  getColor(event:Event){
    this.displayColor = (event.target as HTMLInputElement).value;
  }
  changeColor(){
    this.color = this.displayColor;
  }
 
}



