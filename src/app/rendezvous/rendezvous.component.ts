import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
class RDV {
  static DAT_RDV: any;
  
}

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.sass']
})
export class RendezvousComponent implements OnInit {
  dataList = [];
  RDV:any;
  DAT_RDV:any;
  id:any;
  constructor(private patientServiceService:PatientServiceService,private activatedRoute : ActivatedRoute) {
  
  
   }

  ngOnInit(): void {
  }
  ajouterrendez(liste:any) {
    this.patientServiceService.ajouterrendez(liste).then(response=> {
      console.log(response)
    })
    console.log(liste);
    
}
Affiche(id:any){
  if(RDV.DAT_RDV===this.DAT_RDV){
  this.patientServiceService.Affiche(this.DAT_RDV).then(response=> {
    this.dataList = response.data;
  })
}}
 
}


