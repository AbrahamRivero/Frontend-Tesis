export class DataAnexoTable{
    public codigo: string;
    public descripcion: string;
    public um: string;
    public cantidad: number;

    constructor(codigo:string,descripcion:string,um:string,cantidad:number){
this.codigo=codigo;
this.descripcion=descripcion;
this.um=um;
this.cantidad=cantidad;
    }
}