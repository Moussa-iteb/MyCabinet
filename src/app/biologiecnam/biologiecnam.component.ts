import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biologiecnam',
  templateUrl: './biologiecnam.component.html',
  styleUrls: ['./biologiecnam.component.sass']
})
export class BiologiecnamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  biologiecnam(analyse:any) {
    console.log(analyse);
}
}
