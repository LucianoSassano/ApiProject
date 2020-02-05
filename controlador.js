class Controlador {
  constructor(modelo) {
    this.modelo = modelo;
  }

  assignRandomJokeC(joke) {
    this.modelo.assignRandomJokeM(joke);
  }

  getRandomJoke() {
    return this.modelo.randomJoke;
  }

  getTopJoke(index) {
    return modelo.giveMeTop(index);
  }

  addRandomJokeToArrayC() {
    this.modelo.addRandomJokeToArrayM();
  }
  addRandomJokeToRatingsArrayC() {
    this.modelo.addRandomJokeToRatingsArrayM();
  }

  requireJokesArray() {
    modelo.readJokesLocalStorage();
  }
  requireJokesRatingsArray() {
    modelo.readJokesRatingsLocalStorage();
  }

  upvoteC() {
    return modelo.upvoteM();
  }

  downvoteC() {
    return modelo.downvoteM();
  }
  addToUserJokesC(userJoke) {
    modelo.addToUserJokesM(userJoke);
  }
}

/* export default Controlador; */
