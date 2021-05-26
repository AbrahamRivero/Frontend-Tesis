import { EventEmitter, Injectable } from '@angular/core';
import { DataAnexoTable } from '../shared/dataAnexoTable';

@Injectable({
  providedIn: 'root'
})
export class AnexoService {
  dataTaChange= new EventEmitter<DataAnexoTable[]>();

  private dataT:DataAnexoTable[]=[
    new DataAnexoTable('121asas','esto es una prueba','M',22),
    new DataAnexoTable('0102124434','Jamón Serrano','KG',3),
    new DataAnexoTable('1232334412','dadasdsadfgfg','M',2)
  ];

  constructor() { }

  getDataTables(){
    return this.dataT.slice();
  }
  
  addDataTable(data:DataAnexoTable){
  this.dataT.push(data);
  this.dataTaChange.emit(this.dataT.slice());
  }
  
  addDataTables(dataT:DataAnexoTable[]){
  this.dataT.push(...dataT);
  this.dataTaChange.emit(this.dataT.slice());
  }
}
