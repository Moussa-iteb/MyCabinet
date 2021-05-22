import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
class Certificat { 
}
@Component({
  selector: 'app-profilcert',
  templateUrl: './profilcert.component.html',
  styleUrls: ['./profilcert.component.sass']
})
export class ProfilcertComponent implements OnInit {

  Certificat:any;
  id:any;
  constructor(private patientServiceService:PatientServiceService,private activatedRoute : ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.patientServiceService.getoneCertificat(this.id).then(response=> {
      this.Certificat = response.data[0]
      console.log(this.Certificat)
  })
}
  ngOnInit(): void {
  }

}
