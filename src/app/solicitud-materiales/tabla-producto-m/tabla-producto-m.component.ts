import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataAnexoTable } from 'src/app/shared/dataAnexoTable';
import { AnexoService } from '../anexo.service';
import { element } from 'protractor';
import { chart } from 'highcharts';

@Component({
  selector: 'app-tabla-producto-m',
  templateUrl: './tabla-producto-m.component.html',
  styleUrls: ['./tabla-producto-m.component.scss']
})
export class TablaProductoMComponent implements OnInit {
  dataT !:DataAnexoTable[];

  @ViewChild('codInput') codInputRef !:ElementRef;
  @ViewChild('descripcionInput') descripcionInputRef !:ElementRef;
  @ViewChild('umInput') umInputRef !:ElementRef;
  @ViewChild('cantInput') cantInputRef !:ElementRef;
 

  constructor(private anexoService:AnexoService) { }

  ngOnInit(): void {
    this.dataT=this.anexoService.getDataTables();
    this.anexoService.dataTaChange.subscribe((dataT:DataAnexoTable[])=>{this.dataT=this.dataT;})
  }

  onAddItem(){
    const newData=new DataAnexoTable(this.codInputRef.nativeElement.value,this.descripcionInputRef.nativeElement.value,this.umInputRef.nativeElement.value,this.cantInputRef.nativeElement.value);
    this.anexoService.addDataTable(newData);
      }
      
      

}
