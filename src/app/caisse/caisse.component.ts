import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
class MOUVEMENT_CAISSE { 
}
@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.sass']
})
export class CaisseComponent implements OnInit {
  depenseList = [];
  id:any;
  Mouvement_caisse:any;
  constructor(private patientServiceService:PatientServiceService, private activatedRoute : ActivatedRoute) {
    this.patientServiceService.getMOUVEMENT_CAISSE().then(response=> {
      this.depenseList = response.data;
    })
    //this.id = this.activatedRoute.snapshot.params['id'];
    //this.patientServiceService.afficher(this.id).then(response=> {
    // this.depenseList = response.data;
    //})
   }
  ngOnInit(): void {
  }
ajouterDepense(liste:any) {
  this.patientServiceService.ajouterDepense(liste).then(response=> {
    console.log(response)
  })
  console.log(liste);
}

}
