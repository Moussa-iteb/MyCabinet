import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageriecnam',
  templateUrl: './imageriecnam.component.html',
  styleUrls: ['./imageriecnam.component.sass']
})
export class ImageriecnamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageriecnam(imagerie:any) {
    console.log(imagerie);
}
}
