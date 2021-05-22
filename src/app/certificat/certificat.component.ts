import { Component, OnInit } from '@angular/core';

import { Data } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PatientServiceService } from '../patient-service.service';
class CERTIFICAT {
  
}
@Component({
  selector: 'app-certificat',
  templateUrl: './certificat.component.html',
  styleUrls: ['./certificat.component.sass']
})
export class CertificatComponent implements OnInit {
  certList = [];
  id:any;
  Certficiat:any;
  constructor(private patientServiceService:PatientServiceService,private activatedRoute : ActivatedRoute) {
    this.patientServiceService.getcertificat().then(response=> {
      this.certList = response.data;
    })
   }

  ngOnInit(): void {
  }
  ajouterCertificatt(liste:any) {
    this.patientServiceService.ajouterCertificatt(liste).then(response=> {
      console.log(response)
    })
    console.log(liste);
}
 
}

