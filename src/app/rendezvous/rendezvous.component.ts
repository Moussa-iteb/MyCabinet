import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';
class RDV {
  
}

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.sass']
})
export class RendezvousComponent implements OnInit {
  dataList = [];
  constructor(private patientServiceService:PatientServiceService) {
    this.patientServiceService.getRDV().then(response=> {
      this.dataList = response.data;
    })
   }

  ngOnInit(): void {
  }
  ajouterrendez(liste:any) {
    this.patientServiceService.ajouterrendez(liste).then(response=> {
      console.log(response)
    })
    console.log(liste);
    
}
}
