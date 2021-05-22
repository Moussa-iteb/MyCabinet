import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListepatientComponent } from './listepatient/listepatient.component';

import { CaisseComponent } from './caisse/caisse.component';

import { OrdonnanceComponent } from './ordonnance/ordonnance.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';

import { AnalyseComponent } from './analyse/analyse.component';
import { FormsModule } from '@angular/forms';

import { ImagerieAPCIComponent } from './imagerie-apci/imagerie-apci.component';
import { ProfilpatientComponent } from './profilpatient/profilpatient.component';
import { IrmapciComponent } from './irmapci/irmapci.component';

import { ScannerapciComponent } from './scannerapci/scannerapci.component';

import { ProfilconsComponent } from './profilcons/profilcons.component';
import { CertificatComponent } from './certificat/certificat.component';
import { ProfilcertComponent } from './profilcert/profilcert.component';






const appRoutes: Routes = [
  {path:'listepatient',component:ListepatientComponent},
  
  {path:'caisse',component:CaisseComponent},
  
 
  {path:'ordonnance',component:OrdonnanceComponent},
  {path:'rendezvous',component:RendezvousComponent},

  {path:'profilpatient/:id',component:ProfilpatientComponent},
  
  {path:'analyse',component:AnalyseComponent},
 
 {path:'profilcert/:id',component:ProfilcertComponent},
  
 
  {path:'irmapci',component:IrmapciComponent},
  
  {path:'certificat',component:CertificatComponent},
  {path:'scannerapci',component:ScannerapciComponent},
  
 {path:'profilcons/:id',component:ProfilconsComponent},
 {path:'imagerie-apci',component:ImagerieAPCIComponent},
  
  {
    path: 'dashboard', component: HeaderComponent, 
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ListepatientComponent,
   
    CaisseComponent,

    OrdonnanceComponent,
    RendezvousComponent,
    
    AnalyseComponent,
    
  
    ImagerieAPCIComponent,
   
    
    IrmapciComponent,
  
    
    ScannerapciComponent,
    
    ProfilconsComponent,
    ProfilpatientComponent,
    CertificatComponent,
    ProfilcertComponent,
    
  
    
    

          

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
