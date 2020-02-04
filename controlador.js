class Controlador {
    constructor( modelo ){
        this.modelo = modelo;
    }
    agregarUserJoke(joke){
        this.modelo.agregarUserJoke(joke);

    }
    ordernarPorRating(joke,joke){
        this.modelo.ordernarPorRating(joke,joke);
    }
    votoPositivo(){
        this.modelo.votoPositivo();
    }
    
  
}

export default Controlador