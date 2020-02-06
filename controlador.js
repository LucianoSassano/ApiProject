class Controlador {
    constructor( modelo ){
        this.modelo = modelo;
    }
    agregarUserJoke(joke){
        this.modelo.agregarUserJoke(joke);

    }
    ordernarPorRating(joke1,joke2){
        this.modelo.ordernarPorRating(joke1,joke2);
    }
    votoPositivo(){
        this.modelo.votoPositivo();
    }
    
  
}

export default Controlador