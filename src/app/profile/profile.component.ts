import { Component } from "@angular/core";

@Component({
  selector:'profile',
  templateUrl:'./profile.component.html',
  styleUrl: './profile.component.css'


})



export class ProfileComponent{

  name:string = "shubham"

  updateName(){
    console.log('')
  }
}