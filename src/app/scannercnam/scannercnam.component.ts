import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scannercnam',
  templateUrl: './scannercnam.component.html',
  styleUrls: ['./scannercnam.component.sass']
})
export class ScannercnamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scannercnam(scanner:any) {
    console.log(scanner);
}
}
