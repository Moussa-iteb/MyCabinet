import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.sass']
})
export class OrdonnanceComponent implements OnInit {
  dataList = [];
  prescription:any;

 
  ngOnInit(): void {
  }
  ordonnance(ordonnance:any) {
    console.log(ordonnance);
}
}
