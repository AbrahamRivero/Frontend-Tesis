import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-solicitud-import',
  templateUrl:'./solicitud-import.component.html',
  styleUrls: ['./solicitud-import.component.scss']
})
export class SolicitudImportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form);
  }

}
