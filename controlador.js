class Controlador {
    constructor( modelo ){
        this.modelo = modelo;
    }
    agregarUserJoke(joke){
        this.modelo.agregarUserJoke(joke);

    }

    // jokesRatings order Comparator callback for sort function
    
    orderByRating(a, b) {
    const rating1 = a.rating;
    const rating2 = b.rating;
  
    let comparison = 0;
    if (rating1 < rating2) {
      comparison = 1;
    } else if (rating1 > rating2) {
      comparison = -1;
    }
    return comparison;
  }
}

export default Controlador