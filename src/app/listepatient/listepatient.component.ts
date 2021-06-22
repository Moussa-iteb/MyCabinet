import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { Data } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
import { SearchFilterPipe} from '../search-filter.pipe';
import { CurrencyPipe } from '@angular/common';

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
  queryString:any;
  patient:any;
  NOM_P_RDV:any;
  NUM_TEL_P_RDV:any;
  NUM_FICH_P:any;
	CIN_P:any;
	NOM_P:any;
	PREN_P:any;
  DAT_NAI_P:any;
	PROF_P:any;
  ADR_P:any;
  NUM_TEL_P:any;
  SEXE_P:any;
	CIVILITE_P:any;
	EMAIL_P:any;
  modifier=false;




  constructor(private patientServiceService:PatientServiceService,private activatedRoute : ActivatedRoute) {
    this.patientServiceService.getPatient().then(response=> {
    this.dataList = response.data;
  
    
  })

   }
   
  ngOnInit(): void {
  }


  addPatient(liste:any) {
    if(this.modifier==true){
   
this.patientServiceService.modifierp(this.NUM_FICH_P,liste).then(response=> {
console.log(response)
})
    }else{
      if (liste==""){
        alert("les champs est vide") ;
      }else {
      this.patientServiceService.addPatient(liste).then(response=> {
        console.log(response)
       
      })
    }
    }
    
    console.log(liste);
}
updteptient(NUM_FICH_P:any,	CIN_P:any,	NOM_P:any,		PREN_P:any,	DAT_NAI_P:any,	PROF_P:any,		ADR_P:any,		NUM_TEL_P:any,		SEXE_P:any,		CIVILITE_P:any,	EMAIL_P:any){
 this.NUM_FICH_P = NUM_FICH_P;
  this.modifier=true
  this.CIN_P = CIN_P;
 this.PROF_P = PROF_P;
 this.EMAIL_P = EMAIL_P;
 this.CIVILITE_P = CIVILITE_P;
 this.ADR_P= 	ADR_P;
 this.NUM_TEL_P = NUM_TEL_P;
}
deletepatient(id:any){
  this.patientServiceService.deletepatient(id).then(response=> {
    console.log(response);
  })
  
}

Rechercher(data:any){
 
  this.patientServiceService.recherche(data.NumTel).then(response=>{
      console.log(response)
      this.dataList = response.data;  
  })
 
}
}
