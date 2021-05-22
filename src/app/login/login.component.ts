import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(med:any) {
    if (med.email === 'admin' && med.password ==='admin'){
      this.router.navigateByUrl('dashboard/home');
    } else {
      alert('erreur');
    }
    
   
  }
  

}
