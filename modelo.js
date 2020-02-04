class Modelo {
  constructor() {
    this.randomJoke;
    this.displayingRandomJoke;
    this.jokes = [];
    this.jokesRatings = [];
    this.userJokes = [];
  }
  agregarUserJoke(joke) {
    this.userJokes.push(joke);
  }

  writeJokesLocalStorage() {
    this.jsonJokes = JSON.stringify(jokes);
    localStorage.setItem("jokes", jsonJokes);
  }

  readJokesLocalStorage() {
    this.jsonJokes = localStorage.getItem("jokes");
    return JSON.parse(jsonJokes);
  }
  writeJokesRatingsLocalStorage() {
    this.jsonJokesRatings = JSON.stringify(jokesRatings);
    localStorage.setItem("jokesRatings", jsonJokesRatings);
  }

  readJokesRatingsLocalStorage() {
    this.jsonJokesRatings = localStorage.getItem("jokesRatings");
    return JSON.parse(jsonJokesRatings);
  }
}

class UserJoke {
  constructor(email, jokeText, rating) {
    this.email = email;
    this.jokeText = jokeText;
    this.rating = rating;
  }
}

export default Modelo;
