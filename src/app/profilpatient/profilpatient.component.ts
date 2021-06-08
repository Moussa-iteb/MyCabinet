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
  NUM_M:any;
  dataList = [];
  MEDList = [];
  pList = [];
  trList = [];
  maladeList = [];
  certList = [];
  datList = [];
  id:any;
  Patient:any;
  Certificat:any;
  cnamList = [];
  CNAM:any;
  Consultationt:any;
  MALADIE_CHRONIQUE:any;
  Examen:any;
  Acte:any;
  Acts: any = []
  Malades: any = []
  Medicaments: any = []
  Medicament: any = []
  Examens: any = []
  NUM_CNAM_P: any;
  VAL_CNAM:any;
  TYP_CNAM:any;
  CODE_APCI: any;
  QUAL: any;
  modifier=false;
  constructor( private patientServiceService:PatientServiceService,private activatedRoute : ActivatedRoute) { 
      this.patientServiceService.getActs().then(response=>{
        this.Acts = response.data;
        console.log("Acts")
        console.log(this.Acts)
      })
      this.patientServiceService.getExamen().then(response=>{
        this.Examens = response.data;
        console.log("Examens")
        console.log(this.Examens)
      })
      this.patientServiceService.getmedicament().then(response=>{
        this.Medicaments = response.data;
        console.log("Medicaments")
        console.log(this.Medicaments)
      })
      this.patientServiceService.getmalade().then(response=>{
        this.Malades = response.data;
        console.log("Malades")
        console.log(this.Malades)
      })
      this.patientServiceService.getmedicament().then(response=>{
        this.Medicament = response.data;
        console.log("Medicament")
        console.log(this.Medicament)
      })
      this.id = this.activatedRoute.snapshot.params['id'];
    this.patientServiceService.getConsultationt(this.id).then(response=> {
   this.dataList = response.data;
    })
   
   
  this.id = this.activatedRoute.snapshot.params['id'];
  this.patientServiceService.getonePatient(this.id).then(response=> {
  this.Patient = response.data[0]
  console.log(this.Patient)
  })
  this.id = this.activatedRoute.snapshot.params['id'];
  this.patientServiceService.getonePatient(this.id).then(response=> {
  this.pList = response.data;
  
  })
  this.id = this.activatedRoute.snapshot.params['id'];
  this.patientServiceService.getonemalade(this.id).then(response=> {
  this.maladeList = response.data;
  }) 

  this.id = this.activatedRoute.snapshot.params['id'];
  this.patientServiceService.getonetraitement(this.id).then(response=> {
  this.trList = response.data;
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
    let acte = {NUM_CONS:this.idconsjncdj,NUM_ACTE:act.NUM_ACTE}
    console.log(acte)
    this.patientServiceService.AddActeEnre(acte).then((response)=>{
      console.log(response)
    })
   
    }
   
    deletecnam(id:any){
      this.patientServiceService.deletecnam(id).then(response=> {
        console.log(response);
      })
      
    }
    
    updtecnam(NUM_CNAM_P:any, TYP_CNAM:any, VAL_CNAM:any, CODE_APCI:any){
    
    this.NUM_CNAM_P = NUM_CNAM_P;
    this.TYP_CNAM = TYP_CNAM;
    this.VAL_CNAM = VAL_CNAM;
    this.CODE_APCI = CODE_APCI;
      
      
    }
    ajouteracte(liste:any) {
    
      this.patientServiceService.ajouteracte(liste).then(response=> {
        console.log(response)
      })
      console.log(liste);
    }
ajoutercnam(consu:any, liste:any) {
  if(this.modifier==true){
   
    this.patientServiceService.modifierCnam(this.NUM_CNAM_P).then(response=> {
    console.log(response)
    })
  }else{
let CNAM = {NUM_FICH_P:this.id,NUM_CNAM_P:consu.NUM_CNAM_P,TYP_CNAM:consu.TYP_CNAM,VAL_CNAM:consu.VAL_CNAM,CODE_MED_F:consu.CODE_MED_F,QUAL:consu.QUAL,CODE_APCI:consu.CODE_APCI}
this.patientServiceService.ajoutercnam(CNAM).then(response=> {
console.log(response)
  })
}
console.log(this.CNAM);

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
  ajoutertr(tr:any) {
    console.log(tr)
    let Malad = {NUM_M:this.NUM_M,NUM_MED:tr.NUM_MED}
      console.log(Malad)
      this.patientServiceService.Ajouteravoirtr(Malad).then((response)=>{
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
Save(idt:any){  
  this.NUM_M =  idt; 
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
    ajouterExamen(ex:any) {
      console.log(ex)
      let exa = {NUM_CONS:this.idconsjncdj,NUM_EX:ex.NUM_EX,PRESCRIPTION_EX:ex.PRESCRIPTION_EX}
        console.log(exa)
        this.patientServiceService.ajouterenregistre(exa).then((response)=>{
          console.log(response)
        })
      }
    
     
    ajouterprescription(ord:any) {
      console.log(ord)
    let ORDONNANCE = {NUM_CONS:this.idconsjncdj,NUM_MED:ord.NUM_MED,QTE_MED:ord.QTE_MED,DUR_MED:ord.DUR_MED,NBRE_FOIS_MED:ord.NBRE_FOIS_MED}
    console.log(ORDONNANCE)
    this.patientServiceService.AddPrescription(ORDONNANCE).then(response=> {
    console.log(response)
    })
    
    }
  
}