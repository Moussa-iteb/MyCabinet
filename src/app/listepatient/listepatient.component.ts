import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PatientServiceService } from '../patient-service.service';
class Patient {
  
}
@Component({
  selector: 'app-listepatient',
  templateUrl: './listepatient.component.html',
  styleUrls: ['./listepatient.component.sass']
})

export class ListepatientComponent implements OnInit {

  
  dataList = [];
  id:any;
  patient:any;
  NOM_P_RDV:any;
  NUM_TEL_P_RDV:any;
  constructor(private patientServiceService:PatientServiceService,private activatedRoute : ActivatedRoute) {
   this.patientServiceService.getPatient().then(response=> {
    this.dataList = response.data;
  })
   }
  ngOnInit(): void {
  }
  addPatient(liste:any) {
    this.patientServiceService.addPatient(liste).then(response=> {
      console.log(response)
    })
    console.log(liste);
}
deletepatient(id:any){
  this.patientServiceService.deletepatient(this.id).then(response => {
    console.log(response);
  });
}

}
