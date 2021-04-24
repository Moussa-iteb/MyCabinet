import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scannerapci',
  templateUrl: './scannerapci.component.html',
  styleUrls: ['./scannerapci.component.sass']
})
export class ScannerapciComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scannerapci(scanner:any) {
    console.log(scanner);
}
}
