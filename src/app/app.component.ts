
import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent, SignUpComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
 
username = signal('rushi')
count = signal(0);

displayheading=false;


constructor(){
  effect(()=>{
   if(this.count() == 2){
    this.displayheading = true;
    setTimeout(() => {
      this.displayheading = false
    }, 2000);
   }
  //  else{
  //   this.displayheading = false
  //  }
  })
}

toggleValue(){
  // this.displayheading = ! this.displayheading;
  this.count.set(this.count()+1)
}
updateUsername(){

}

}




