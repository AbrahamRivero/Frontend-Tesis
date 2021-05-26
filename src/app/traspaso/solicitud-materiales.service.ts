import { EventEmitter, Injectable } from '@angular/core';
import { DataTable } from '../shared/dataTable.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudMaterialesService {
dataTaChange= new EventEmitter<DataTable[]>();

private dataT:DataTable[]=[
  new DataTable('121asas','esto es una prueba','M',22,123,456),
  new DataTable('0102124434','Jamón Serrano','KG',3,50,150),
  new DataTable('1232334412','dadasdsadfgfg','M',2,4,12)
];

getDataTables(){
  return this.dataT.slice();
}

addDataTable(data:DataTable){
this.dataT.push(data);
this.dataTaChange.emit(this.dataT.slice());
}

addDataTables(dataT:DataTable[]){
this.dataT.push(...dataT);
this.dataTaChange.emit(this.dataT.slice());
}

  constructor() { }
}
