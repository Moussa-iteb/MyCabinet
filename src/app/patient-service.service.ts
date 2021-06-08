import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  
  constructor() { }

  async getActs(){
    return await axios.get('http://localhost:5000/Acte',{});
  }

  async  getPatient(){
    return await  axios.get('http://localhost:5000/PATIENT',{});
  }
  async  getRDV(){
    return await  axios.get('http://localhost:5000/RDV',{});
  }
  async  getMOUVEMENT_CAISSE(){
    return await  axios.get('http://localhost:5000/MOUVEMENT_CAISSE',{});
  }
 
  async  getConsultationt(id:any){
    return await  axios.get('http://localhost:5000/Consultationt/'+id,{});
  }
  async  getLettre(){
    return await  axios.get('http://localhost:5000/LETTRE',{});
  }
  async  getExamen(){
    return await  axios.get('http://localhost:5000/Examen',{});
  }
 
  async  getacte(id:any){
    return await  axios.get('http://localhost:5000/ENREGISTRE_ACTE/'+id,{});
  }
  async  getmalade(){
    return await  axios.get('http://localhost:5000/MALADIE_CHRONIQUE',{});
  }
  async  getAvoir(){
    return await  axios.get('http://localhost:5000/AVOIR',{});
  }
  async addPatient(data: any){
    return await axios.post('http://localhost:5000/PATIENT',data)
  }
  async AddActeEnre(data:any){
    return await axios.post('http://localhost:5000/enregistre_Acte',data);
  }
  async AddPrescription(data:any){
    return await axios.post('http://localhost:5000/Prescription',data);
  }
  async ajouterenregistre(data:any){
    return await axios.post('http://localhost:5000/Enregistre',data);
  }
  async Inscription(data:any){
    return await axios.post('http://localhost:5000/Utilisateur',data);
  }
  async Ajouteravoir(data:any){
    return await axios.post('http://localhost:5000/AVOIR_MALADIE',data);
  }
  async Ajouteravoirtr(data:any){
    return await axios.post('http://localhost:5000/AVOIR_TRAITEMENT',data);
  }

  async  getonePatient(id: any){
    return await  axios.get('http://localhost:5000/PATIENT/'+id,{});
  }
  async Affiche(id: any){
    return await  axios.get('http://localhost:5000/RDV/'+id,{});
  }
  
  async  getoneCnam(id: any){
    return await  axios.get('http://localhost:5000/CNAM/'+id,{});
  }
  async  modifierCnam(id: any){
    return await  axios.put('http://localhost:5000/CNAM/'+id,{});
  }
  async  getonemalade(id: any){
    return await  axios.get('http://localhost:5000/AVOIR_MALADIE/'+id,{});
  }
  async  getonetraitement(id: any){
    return await  axios.get('http://localhost:5000/Avoir_traitement/'+id,{});
  }
  async  getoneutilisateur(id: any){
    return await  axios.get('http://localhost:5000/UTILISATEUR/'+id,{});
  }
  async  getoneCertificat(id: any){
    return await  axios.get('http://localhost:5000/CERTIFICAT/'+id,{});
  }
  async  getcertificat(){
    return await  axios.get('http://localhost:5000/CERTIFICAT',{});
  }
  async  getutilisateur(){
    return await  axios.get('http://localhost:5000/UTILISATEUR',{});
  }
  async  getmedicament(){
    return await  axios.get('http://localhost:5000/MEDICAMENT',{});
  }
  async  getprescription(){
    return await  axios.get('http://localhost:5000/PRESCRIPTION',{});
  }
 
  async ajouterconsultation(data: any){
    return await axios.post('http://localhost:5000/CONSULTATIONT',data)
  }
  async ajouterm(data: any){
    return await axios.post('http://localhost:5000/MALADIE_CHRONIQUE',data)
  }
  async ajouteracte(data: any){
    return await axios.post('http://localhost:5000/ACTE',data)
  }
  async ajouteracteconsult(data: any){
    return await axios.post('http://localhost:5000/ENREGISTRE_ACTE',data)
  }
  
  async ajoutermalade(data: any){
    return await axios.post('http://localhost:5000/MALADIE_CHRONIQUE',data)
  }
 
  async ajouterDepense(data: any){
    return await axios.post('http://localhost:5000/MOUVEMENT_CAISSE',data)
  }
  async ajouterEnc(data: any){
    return await axios.post('http://localhost:5000/MOUVEMENT_CAISSE',data)
  }
  async ajouterCertificat(data: any){
    return await axios.post('http://localhost:5000/CERTIFICAT',data)
  }
  async ajouterCertificatt(data: any){
    return await axios.post('http://localhost:5000/CERTIFICAT',data)
  }
  async  getoneConsultationt(id: any){
    return await  axios.get('http://localhost:5000/CONSULTATIONTT/'+id,{});
  }
  async  getoneprescription(id: any){
    return await  axios.get('http://localhost:5000/PRESCRIPTION/'+id,{});
  }
  async  deletepatient(id: any){
    
    return await  axios.delete('http://localhost:5000/PATIENT/'+id,{});
  }
  async  deletecnam(id: any){
    
    return await  axios.delete('http://localhost:5000/CNAM/'+id,{});
  }
  async ajouterrendezvous(data: any){
    return await axios.post('http://localhost:5000/RDV',data)
  }
  async ajouterrendez(data: any){
    return await axios.post('http://localhost:5000/RDV',data)
  }
  async ajouterlettre(data: any){
    return await axios.post('http://localhost:5000/LETTRE',data)
  }
  async ajouterordonnance(data: any){
    return await axios.post('http://localhost:5000/ORDONNANCE',data)
  }
  
  async ajoutermed(data: any){
    return await axios.post('http://localhost:5000/MEDICAMENT',data)
  }
  async ajoutercnam(data: any){
    return await axios.post('http://localhost:5000/CNAM',data)
  }
  
  async  getoneLettre(id: any){
    return await  axios.get('http://localhost:5000/LETTRE/'+id,{});
  }
  async  getonecnam(id: any){
    return await  axios.get('http://localhost:5000/CNAM/'+id,{});
  }
  async  afficher(id: any){
    return await  axios.get('http://localhost:5000/MOUVEMENT_CAISSE/'+id,{});
  }
  async  modifierp(id: any,data: any){
    return await  axios.put('http://localhost:5000/PATIENT/'+id,data);
  }
}
