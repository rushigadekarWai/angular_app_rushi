
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
  
 name = "";
 displayName="";
 email=""
 
 getName(event:Event){
  this.name  = (event.target as HTMLInputElement).value;
  
 }
  
 showName(){
  this.displayName = this.name;
  
 }

 setName(){
  this.name = 'rushikesh'
 }


 
 getEmail(val:string){
  console.log(val);
  this.email = val;

 }

 setEmail(){
  this.email = "default@gmail"

 }
}



