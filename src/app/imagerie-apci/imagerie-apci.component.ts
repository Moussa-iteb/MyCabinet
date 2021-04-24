import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagerie-apci',
  templateUrl: './imagerie-apci.component.html',
  styleUrls: ['./imagerie-apci.component.sass']
})
export class ImagerieAPCIComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Imagerieapci(img:any) {
    console.log(img);
}
}
