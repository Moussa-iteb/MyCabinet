import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listepatient',
  templateUrl: './listepatient.component.html',
  styleUrls: ['./listepatient.component.sass']
})
export class ListepatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listepatient(liste:any) {
    console.log(liste);
}
}
