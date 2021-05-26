import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataTable } from 'src/app/shared/dataTable.model';
import { SolicitudMaterialesService } from '../solicitud-materiales.service';


@Component({
  selector: 'app-tabla-producto-t',
  templateUrl: './tabla-producto-t.component.html',
  styleUrls: ['./tabla-producto-t.component.scss']
})
export class TablaProductoTComponent implements OnInit {
  dataT !:DataTable[];

  @ViewChild('codInput') codInputRef !:ElementRef;
  @ViewChild('descripcionInput') descripcionInputRef !:ElementRef;
  @ViewChild('umInput') umInputRef !:ElementRef;
  @ViewChild('cantInput') cantInputRef !:ElementRef;
  @ViewChild('costomnInput') costomnInputRef !:ElementRef;
  @ViewChild('importmonInput') importmonInputRef !:ElementRef;
  
  constructor(private smService:SolicitudMaterialesService) { }

  ngOnInit(): void {
    this.dataT=this.smService.getDataTables();
    this.smService.dataTaChange.subscribe((dataT:DataTable[])=>{this.dataT=this.dataT;})
  }

  onAddItem(){
    const newData=new DataTable(this.codInputRef.nativeElement.value,this.descripcionInputRef.nativeElement.value,this.umInputRef.nativeElement.value,this.cantInputRef.nativeElement.value,this.costomnInputRef.nativeElement.value,this.importmonInputRef.nativeElement.value);
    this.smService.addDataTable(newData);
      }

}
