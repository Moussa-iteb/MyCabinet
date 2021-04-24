import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-irmcnam',
  templateUrl: './irmcnam.component.html',
  styleUrls: ['./irmcnam.component.sass']
})
export class IrmcnamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  irmcnam(irm:any) {
    console.log(irm);
}
}
