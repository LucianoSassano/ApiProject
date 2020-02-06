class Controlador {
  constructor(modelo) {
    this.modelo = modelo;
  }

  addUserJoke(joke) {
    this.modelo.addUserJoke(joke);
  }

  assignRandomJoke(joke) {
    this.modelo.assignRandomJoke(joke);
  }

  getRandomJoke() {
    return this.modelo.randomJoke;
  }

  orderByRating(joke1, joke2) {
    this.modelo.ordernarPorRating(joke1, joke2);
  }

  positiveVote() {
    this.modelo.positiveVote();
  }

  negativeVote() {
    this.modelo.negativeVote();
  }
}

export default Controlador;
