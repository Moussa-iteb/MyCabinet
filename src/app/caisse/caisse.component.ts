import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
import { DatePipe } from '@angular/common'
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
  TYPE_M_C:any;
  DAT_M_C:any;
  constructor(private patientServiceService:PatientServiceService, private activatedRoute : ActivatedRoute) {
    this.patientServiceService.getMOUVEMENT_CAISSE().then(response=> {
      this.depenseList = response.data;
    })
   
   }
  ngOnInit(): void {
  }
ajouterDepense(liste:any) {
  this.patientServiceService.ajouterDepense(liste).then(response=> {
    console.log(response)
  })
  console.log(liste);
}
rechercher(mouvement:any){
  let m={DAT_M_C:mouvement.DAT_M_C,TYPE_M_C:mouvement.TYPE_M_C}
  if (mouvement.DAT_M_C===this.DAT_M_C && mouvement.TYPE_M_C===this.TYPE_M_C){
    this.patientServiceService.afficher(m).then((response)=>{
      console.log(response)
      this.depenseList = response.data;
    })
  }}
}