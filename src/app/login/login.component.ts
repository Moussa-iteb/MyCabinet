import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PatientServiceService } from '../patient-service.service';
class utilisateur {
  static Adresse:any;
   static TYPE_UT:any;
    static Password:any;
  }

  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  utilisateur: any;
Adresse:any;
TYPE:any;
Password:any;
id:any;
  connexion: any;
  constructor(private patientServiceService:PatientServiceService,private activatedRoute : ActivatedRoute,private router:Router) {
   
   }

   
  ngOnInit(): void {
  }

 
  login(connexion:any){
    let med={Adresse:'',Password:'',TYPE_UT:''};
    med.Password=connexion.password;
    med.Adresse=connexion.Adresse;
    med.TYPE_UT=connexion.TYPE_UT;
    this.patientServiceService.getoneutilisateur(med).then(response=> {
      console.log(response);
      if(this.connexion==response){
        
        this.router.navigateByUrl('dashboard/home');
        alert ("Bienvenue Dr Sioud");
      } else {
        alert ("erreur");
        
      }
    
    })
    }
  };
  
   