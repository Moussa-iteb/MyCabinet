import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
class patient { 
}
@Component({
  selector: 'app-profilpatient',
  templateUrl: './profilpatient.component.html',
  styleUrls: ['./profilpatient.component.sass']
})
export class ProfilpatientComponent implements OnInit {
  idconsjncdj:any;
  dataList = [];
  maladeList = [];
  certList = [];
  datList = [];
  id:any;
  Patient:any;
  Certificat:any;
  cnamList = [];
  CNAM:any;
  Consultationt:any;
  Examen:any;
  Acte:any;
  Acts: any = []
  Malades: any = []
  Medicaments: any = []
  constructor( private patientServiceService:PatientServiceService,private activatedRoute : ActivatedRoute) { 
      this.patientServiceService.getActs().then(response=>{
        this.Acts = response.data;
        console.log("acts")
        console.log(this.Acts)
      })
      this.patientServiceService.getmalade().then(response=>{
        this.Malades = response.data;
        console.log("Malades")
        console.log(this.Malades)
      })
      this.patientServiceService.getmedicament().then(response=>{
        this.Medicaments = response.data;
        console.log("Medicaments")
        console.log(this.Medicaments)
      })

    this.patientServiceService.getConsultationt().then(response=> {
   this.dataList = response.data;
    })
   
   
  this.id = this.activatedRoute.snapshot.params['id'];
  this.patientServiceService.getonePatient(this.id).then(response=> {
  this.Patient = response.data[0]
  console.log(this.Patient)
  })
  this.id = this.activatedRoute.snapshot.params['id'];
  this.patientServiceService.getonemalade(this.id).then(response=> {
  this.maladeList = response.data;
  }) 
  this.id = this.activatedRoute.snapshot.params['id'];
  this.patientServiceService.getoneCnam(this.id).then(response=> {
  this.cnamList = response.data;
  }) 
}

  ngOnInit(): void {
  }
  ajouterconsultationt(consu:any) {
  let CONSULTATION = {NUM_FICH_P:this.id,DAT_CONS:consu.DAT_CONS,TYPE_CONS:consu.TYPE_CONS,OBS_CONS:consu.OBS_CONS,TEN_P_CONS:consu.TEN_P_CONS,TEMP_P_CONS:consu.TEMP_P_CONS,POID_P_CONS:consu.POID_P_CONS,TAIL_P_CONS:consu.TAIL_P_CONS,F_C_P_CONS:consu.F_C_P_CONS}
  this.patientServiceService.ajouterconsultation(CONSULTATION).then(response=> {
  console.log(response)
    })
  console.log(CONSULTATION);   
}
ajouterCertificat(cert:any) {
  let CERTIFICAT = {NUM_FICH_P: this.id,DAT_REPOS:cert.DAT_REPOS,NBRE_JOURS_REPOS:cert.NBRE_JOURS_REPOS,NOM_P_C:this.Patient.NOM_P}
  this.patientServiceService.ajouterCertificat(CERTIFICAT).then(Response=>{
    console.log(Response)
  }) 
  console.log(CERTIFICAT);
}
ajouterrendezvous(rendez:any) {
  let rendezvous = {NUM_FICH_P:this.id,DAT_RDV:rendez.DAT_RDV,NOM_P_RDV:this.Patient.NOM_P,NUM_TEL_P_RDV:this.Patient.NUM_TEL_P}
  this.patientServiceService.ajouterrendezvous(rendezvous).then(response=> {
  console.log(response)
    })
  console.log(rendezvous);   
  }
  ajouteracteconsult(act:any) {
    console.log(act)
    let acte = {NUM_CONS:this.idconsjncdj,NUM_ACTE:act.id_act}
    console.log(acte)
    this.patientServiceService.AddActeEnre(acte).then((response)=>{
      console.log(response)
    })
   
    }
    ajouteracte(liste:any) {
    
      this.patientServiceService.ajouteracte(liste).then(response=> {
        console.log(response)
      })
      console.log(liste);
    }
ajoutercnam(consu:any) {
let CNAM = {NUM_FICH_P:this.id,NUM_CNAM_P:consu.NUM_CNAM_P,TYP_CNAM:consu.TYP_CNAM,VAL_CNAM:consu.VAL_CNAM,CODE_MED_F:consu.CODE_MED_F,QUAL:consu.QUAL,CODE_APCI:consu.CODE_APCI}
this.patientServiceService.ajoutercnam(CNAM).then(response=> {
console.log(response)
  })
console.log(CNAM);
}
ajouterEnc(ENCE:any) {
let ENC = {NUM_CONS:this.idconsjncdj,DAT_M_C:ENCE.DAT_M_C,MONT_M_C:ENCE.MONT_M_C,SUBV_CNAM:ENCE.SUBV_CNAM,TYPE_M_C:ENCE.TYPE_M_C}
this.patientServiceService.ajouterEnc(ENC ).then(response=> { 
console.log(response)
  })
console.log(ENC );
}
ajoutermalade(malade:any) {
  console.log(malade)
  let Malades = {NUM_FICH_P:this.id,NUM_M:malade.id_M}
    console.log(Malades)
    this.patientServiceService.Ajouteravoir(Malades).then((response)=>{
      console.log(response)
    })
  }

ajouterm(liste:any) {
 
  this.patientServiceService.ajouterm(liste).then(response=> {
  console.log(Response);
  })
  console.log(liste);
  } 
    
    
    


onSave(vkfn:any){  
  this.idconsjncdj =  vkfn; 
}    
ajouterlettre(Lett:any) {
    let LETTRE = {NUM_CONS:this.idconsjncdj,NOM_CONF:Lett.NOM_CONF,PREN_CONF:Lett.PREN_CONF,TEL_CONF:Lett.TEL_CONF,SPEC_CONF:Lett.SPEC_CONF,DESC_L:Lett.DESC_L,ADR_CONF:Lett.ADR_CONF}
    this.patientServiceService.ajouterlettre(LETTRE).then(response=> {
    console.log(response)
      })
    console.log(LETTRE); 
    }
    ajoutermed(liste:any) {
    this.patientServiceService.ajoutermed(liste).then(response=> {
    console.log(response)
      })
    console.log(liste); 
    }
    ajouterExamen(liste:any) {
      this.patientServiceService.ajoutermed(liste).then(response=> {
      console.log(response)
        })
      console.log(liste); 
      }
    
    ajouterprescription(ord:any) {
    let ORDONNANCE = {NUM_CONS:this.idconsjncdj}
    this.patientServiceService.ajouterprescription(ORDONNANCE).then(response=> {
    console.log(response)
    })
    console.log(ORDONNANCE);
    }
  
}