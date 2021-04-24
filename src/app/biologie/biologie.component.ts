import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biologie',
  templateUrl: './biologie.component.html',
  styleUrls: ['./biologie.component.sass']
})
export class BiologieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  biologie(analyse:any) {
    console.log(analyse);
}
}
