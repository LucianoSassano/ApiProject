class Controlador {
  constructor(modelo) {
    this.modelo = modelo;
  }

  addUserJoke(joke) {
    this.modelo.addUserJoke(joke);
  }

  addRandomJoke(joke) {
    this.modelo.addRandomJoke(joke);
  }

  getRandomJoke() {
    return this.modelo.randomJoke;
  }

  ordernarPorRating(joke1, joke2) {
    this.modelo.ordernarPorRating(joke1, joke2);
  }

  positiveVote() {
    this.modelo.positiveVote();
  }
  
  negativeVote(){
      this.modelo.negativeVote();
  }
}

export default Controlador;
