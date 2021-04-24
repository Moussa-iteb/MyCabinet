import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lettre',
  templateUrl: './lettre.component.html',
  styleUrls: ['./lettre.component.sass']
})
export class LettreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lettre(lettre:any) {
    console.log(lettre);
}
}
