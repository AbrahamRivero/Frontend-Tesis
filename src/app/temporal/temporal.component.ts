import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temporal',
  templateUrl: './temporal.component.html',
  styleUrls: ['./temporal.component.scss']
})
export class TemporalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewSolicitudI(){
    this.router.navigate(['/sol_importacion']);
  }
  viewDictamen(){
    this.router.navigate(['/dictamenTecn']);
  }
  viewLogin(){
    this.router.navigate(['/login']);
  }
  viewTraspaso(){
    this.router.navigate(['/traspaso']);
  }
  viewSolicitudM(){
    this.router.navigate(['/sol_materiales']);
  }


}
