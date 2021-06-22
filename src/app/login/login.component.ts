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
    let med={Adresse:'',password:'',TYPE_UT:''};
   med.Adresse=connexion.Adresse;
   med.password = connexion.Password;
   med.TYPE_UT = connexion.TYPE_UT;
   console.log(med)
   this.patientServiceService.getUtilisateur(med).then(
     Response=>{
       console.log(Response)
       if(Response.data.msg=="erreur"){
alert("erreur");
       }else{
        localStorage.setItem('tokenMed',Response.data.tokenMed);
        this.router.navigate(['/dashboard/listepatient']);
       }
     
     }
    );
    
 }

}
