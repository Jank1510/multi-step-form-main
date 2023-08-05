import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi-step-form-main';
  constructor(private router:Router){
    router.navigate(['info'])

    setTimeout(() => {
      console.log(router.url)
      
    }, 100);
  }
}
