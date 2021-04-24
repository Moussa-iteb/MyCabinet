import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagerie',
  templateUrl: './imagerie.component.html',
  styleUrls: ['./imagerie.component.sass']
})
export class ImagerieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imagerie(imag:any) {
    console.log(imag);
}
}
