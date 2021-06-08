import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientServiceService } from '../patient-service.service';
class  utilisateur {

}
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.sass']
})
export class InscriptionComponent implements OnInit {

  constructor(private patientServiceService:PatientServiceService,private activatedRoute : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  Inscription(liste:any) {
    this.patientServiceService.Inscription(liste).then(response=> {
      console.log(response)
    })
    console.log(liste);
    this.router.navigateByUrl('dashboard/home');
}
}
