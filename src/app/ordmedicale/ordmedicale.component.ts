import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordmedicale',
  templateUrl: './ordmedicale.component.html',
  styleUrls: ['./ordmedicale.component.sass']
})
export class OrdmedicaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ordmedicale(ord:any) {
    console.log(ord);
}
}
