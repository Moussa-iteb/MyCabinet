import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.sass']
})
export class OrdonnanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ordonnance(ordonnance:any) {
    console.log(ordonnance);
}
}