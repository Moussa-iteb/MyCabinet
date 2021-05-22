import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  
  constructor() { }

  async getActs(){
    return await axios.get('http://localhost:5000/ACTE',{});
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
 
  async  getConsultationt(){
    return await  axios.get('http://localhost:5000/Consultationt',{});
  }
  async  getLettre(){
    return await  axios.get('http://localhost:5000/LETTRE',{});
  }
  async  getExamen(){
    return await  axios.get('http://localhost:5000/Examen',{});
  }
  async  getEnregistre(){
    return await  axios.get('http://localhost:5000/Enregistre',{});
  }
  async  getacte(){
    return await  axios.get('http://localhost:5000/ACTE',{});
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
  async Ajouteravoir(data:any){
    return await axios.post('http://localhost:5000/AVOIR_MALADIE',data);
  }

  async  getonePatient(id: any){
    return await  axios.get('http://localhost:5000/PATIENT/'+id,{});
  }
  async  afficher(id: any){
    return await  axios.get('http://localhost:5000/MOUVEMENT_CAISSE/'+id,{});
  }
  
  async  getoneCnam(id: any){
    return await  axios.get('http://localhost:5000/CNAM/'+id,{});
  }
  async  getonemalade(id: any){
    return await  axios.get('http://localhost:5000/MALADIE_CHRONIQUE/'+id,{});
  }
  async  getoneCertificat(id: any){
    return await  axios.get('http://localhost:5000/CERTIFICAT/'+id,{});
  }
  async  getcertificat(){
    return await  axios.get('http://localhost:5000/CERTIFICAT',{});
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
    return await  axios.get('http://localhost:5000/CONSULTATIONT/'+id,{});
  }
  async  getoneprescription(id: any){
    return await  axios.get('http://localhost:5000/PRESCRIPTION/'+id,{});
  }
  async  deletepatient(id: any){
    return await  axios.delete('http://localhost:5000/PATIENT/'+id,{});
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
  async ajouterprescription(data: any){
    return await axios.post('http://localhost:5000/PRESCRIPTION',data)
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

}
