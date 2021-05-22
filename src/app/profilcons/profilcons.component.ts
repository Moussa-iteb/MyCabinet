import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
class Consultationt {
  
}

@Component({
  selector: 'app-profilcons',
  templateUrl: './profilcons.component.html',
  styleUrls: ['./profilcons.component.sass']
})
export class ProfilconsComponent implements OnInit {
  acteList = [];
  id:any;
  NUM_CONS:any;
  patient:any;
  Lettre:any;
  Consultationt:any;
  medicament:any;
  prescription:any;
  constructor( private patientServiceService:PatientServiceService,private activatedRoute : ActivatedRoute) { 
    this.patientServiceService.getacte().then(response=> {
      this.acteList = response.data;
      
    })
    this.id = this.activatedRoute.snapshot.params['id'];
  this.patientServiceService.getoneLettre(this.id).then(response=> {
  this.Lettre = response.data[0]
  console.log(this.Lettre)
  })
    this.id = this.activatedRoute.snapshot.params['id'];
  this.patientServiceService.getoneConsultationt(this.id).then(response=> {
    this.Consultationt = response.data[0]
    console.log(this.Consultationt)
  })
  
}
 
  ngOnInit(): void {
  }
 
    ajouterirm(irm:any) {
    let examenirm = {NUM_CONS:this.id,Prescription_EX:irm.Prescription}
    console.log(irm);
    }
    ajouterscanner(scanner:any) {
    let examenscanner = {NUM_CONS:this.id,Prescription_EX:scanner.Prescription}
    console.log(scanner);
    }
    ajouterRadio(Radio:any) {
    let examenRadio = {NUM_CONS:this.id,Prescription_EX:Radio.Prescription}
    console.log(Radio);
    }
    ajouterAnalyse(analyse:any) {
    let examenanalyse = {NUM_CONS:this.id,Prescription_EX:analyse.Prescription}
    console.log(analyse);
    }
  
  
}

