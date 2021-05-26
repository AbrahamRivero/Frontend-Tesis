import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descripcion-empresa',
  templateUrl: './descripcion-empresa.component.html',
  styleUrls: ['./descripcion-empresa.component.scss']
})
export class DescripcionEmpresaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewEmpresa(){
    this.router.navigate(['/empresa']);
  }
}
