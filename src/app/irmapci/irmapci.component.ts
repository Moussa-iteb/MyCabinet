import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-irmapci',
  templateUrl: './irmapci.component.html',
  styleUrls: ['./irmapci.component.sass']
})
export class IrmapciComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  irmapci(irm:any) {
    console.log(irm);
}
}
