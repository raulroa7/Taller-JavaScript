import{Electrodomestico} from('./Electrodomestico.js');

export class Nevera extends Electrodomestico{

    constructor(Consumo, Procedencia, Capacidad){
        super(opcProcedencia, consumo)
        this.valorCapacidad= Capacidad;
        this.valorCapacidad();
    }

    calcularPrecioCapacidad(){
        if(this.Capacidad > 120) {
            this.Capacidad = (((this.Capacidad -120) *5) /100)
        } else{
            this.Capacidad=0;
        }
        calcularPrecioCapacidad();{
            this.calcularPrecioCapacidad();
            this.valorCapacidad=this.precio*this.Capacidad;
            return this.valorCapacidad;

        }
    }
    calcularPrecioBase(){
        super.calcularPreciobase();
        returnthis.precio+this.calcularPrecioCapacidad;
    }
}