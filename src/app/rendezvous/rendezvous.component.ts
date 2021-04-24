import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.sass']
})
export class RendezvousComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rendezvous(rendez:any) {
    console.log(rendez);
}
}
