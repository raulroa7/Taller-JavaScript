export default class Electrodomestico{
    constructor(opcProcedencia, consumo){
        this. consumo= consumo;
        this. opcProcendencia= opcProcedencia;
        this.calcularPrecioBase;
        this.precio= 0;
    }
    obtenerValorProcedencia(){
        return resultado= (this.obtenerValorProcedencia==='Nacional')? 250_000: 350_000;
        
    }
    obtenerValorConsumo(){
        switch(this.consumo){
            case "A":
                return 450_000;
                
            case "B":
                return 350_000;
                
            case "C":
                return 250_000;

            default:
                return 0;
        }
    }
        calcularPrecioBase(){
            return this.getcalcularPrecioBase() + this.obtenerValorProcedencia();
        }
        get calcularPrecioTotal(){
            return this.precio;
        }
    }