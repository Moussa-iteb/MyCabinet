import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-irm',
  templateUrl: './irm.component.html',
  styleUrls: ['./irm.component.sass']
})
export class IrmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  irm(irm:any) {
    console.log(irm);
}
}
