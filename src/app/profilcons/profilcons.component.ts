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
    this.id = this.activatedRoute.snapshot.params['id'];
    this.patientServiceService.getacte(this.id).then(response=> {
      this.acteList = response.data;
      
    })
  
    this.id = this.activatedRoute.snapshot.params['id'];
  this.patientServiceService.getoneConsultationt(this.id).then(response=> {
    this.Consultationt = response.data[0]
    console.log(this.Consultationt)
  })
  
}
 
  ngOnInit(): void {
  }
 
   
  
}

