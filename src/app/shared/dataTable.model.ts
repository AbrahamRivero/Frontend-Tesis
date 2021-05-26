export class DataTable{
    public codigo: string;
    public descripcion: string;
    public um: string;
    public cantidad: number;
    public costoMN: number;
    public importeMonCUP:number;

    constructor(codigo:string,descripcion:string,um:string,cantidad:number,costoMN:number,importeMonCUP:number){
this.codigo=codigo;
this.descripcion=descripcion;
this.um=um;
this.cantidad=cantidad;
this.costoMN=costoMN;
this.importeMonCUP=importeMonCUP;
    }
}