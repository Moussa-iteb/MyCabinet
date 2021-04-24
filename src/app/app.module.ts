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
import { ProfilComponent } from './profil/profil.component';
import { CaisseComponent } from './caisse/caisse.component';

import { OrdonnanceComponent } from './ordonnance/ordonnance.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';

import { AnalyseComponent } from './analyse/analyse.component';
import { FormsModule } from '@angular/forms';
import { OrdmedicaleComponent } from './ordmedicale/ordmedicale.component';
import { BiologiecnamComponent } from './biologiecnam/biologiecnam.component';
import { BiologieComponent } from './biologie/biologie.component';
import { ImagerieComponent } from './imagerie/imagerie.component';
import { ImageriecnamComponent } from './imageriecnam/imageriecnam.component';
import { ImagerieAPCIComponent } from './imagerie-apci/imagerie-apci.component';
import { IrmComponent } from './irm/irm.component';
import { IrmcnamComponent } from './irmcnam/irmcnam.component';
import { IrmapciComponent } from './irmapci/irmapci.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ScannercnamComponent } from './scannercnam/scannercnam.component';
import { ScannerapciComponent } from './scannerapci/scannerapci.component';
import { LettreComponent } from './lettre/lettre.component';




const appRoutes: Routes = [
  {path:'listepatient',component:ListepatientComponent},
  {path:'profil',component:ProfilComponent},
  {path:'caisse',component:CaisseComponent},
  {path:'caisse',component:CaisseComponent},
 
  {path:'ordonnance',component:OrdonnanceComponent},
  {path:'rendezvous',component:RendezvousComponent},
  
  {path:'ordmedicale',component:OrdmedicaleComponent},
  {path:'analyse',component:AnalyseComponent},
  {path:'biologiecnam',component:BiologiecnamComponent},
  {path:'biologie',component:BiologieComponent},
  {path:'imagerie',component:ImagerieComponent},
  {path:'imageriecnam',component:ImageriecnamComponent},
  {path:'imagerieapci',component:ImagerieAPCIComponent},
  {path:'irm',component:IrmComponent},
  {path:'irmapci',component:IrmapciComponent},
  {path:'irmcnam',component:IrmcnamComponent},
  {path:'scanner',component:ScannerComponent},
  {path:'scannercnam',component:ScannercnamComponent},
  {path:'scannerapci',component:ScannerapciComponent},
  {path:'lettre',component:LettreComponent},
  
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
    ProfilComponent,
    CaisseComponent,

    OrdonnanceComponent,
    RendezvousComponent,
    
    AnalyseComponent,
    OrdmedicaleComponent,
    BiologiecnamComponent,
    BiologieComponent,
    ImagerieComponent,
    ImageriecnamComponent,
    ImagerieAPCIComponent,
    IrmComponent,
    IrmcnamComponent,
    IrmapciComponent,
    ScannerComponent,
    ScannercnamComponent,
    ScannerapciComponent,
    LettreComponent,
    

          

    
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
