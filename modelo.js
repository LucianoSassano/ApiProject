class Modelo {
  constructor() {
    //Setting of vars and event listeners

    this.randomJoke;
    this.displayingRandomJoke;
    this.jokes = [];
    this.jokesRatings = [];
    this.userJokes = [];
  }

  assignRandomJokeM(joke) {
    this.displayingRandomJoke = this.randomJoke;
    this.randomJoke = joke;
  }

  //Local Storage Functions

  writeJokesLocalStorage() {
    var jsonJokes = JSON.stringify(this.jokes);
    localStorage.setItem("jokes", jsonJokes);
  }

  readJokesLocalStorage() {
    var jsonJokes = localStorage.getItem("jokes");
    var aux = JSON.parse(jsonJokes);

    if (aux != null) {
      this.jokes = aux;
    }
  }
  writeJokesRatingsLocalStorage() {
    var jsonJokesRatings = JSON.stringify(modelo.jokesRatings);
    localStorage.setItem("jokesRatings", jsonJokesRatings);
  }

  readJokesRatingsLocalStorage() {
    var jsonJokes = localStorage.getItem("jokesRatings");
    var aux = JSON.parse(jsonJokes);
    if (aux != null) {
      this.jokesRatings = aux;
    }
  }
  addRandomJokeToArrayM() {
    if (
      this.jokes.find(function(element) {
        return element.id == modelo.randomJoke.id;
      }) == undefined
    ) {
      this.jokes.push(this.randomJoke);
      this.writeJokesLocalStorage();
    }
  }
  addRandomJokeToRatingsArrayM() {
    if (
      this.jokesRatings.find(function(element) {
        return element.joke.id == modelo.randomJoke.id;
      }) == undefined
    ) {
      let elem = {
        joke: this.randomJoke,
        rating: Math.floor(Math.random() * 100),
        voted: false
      };
      this.jokesRatings.push(elem);
      this.jokesRatings.sort(orderByRating);
      this.writeJokesRatingsLocalStorage();
    }
  }
  giveMeTop(index) {
    this.displayingRandomJoke = this.jokesRatings[index].joke;
    return this.jokesRatings[index].joke;
  }

  upvoteM() {
    var msg = "You have already voted this joke! Try next one";
    this.jokesRatings.forEach(element => {
      if (element.joke.id === this.displayingRandomJoke.id) {
        if (element.voted == false) {
          element.rating++;
          element.voted = true;
          msg = "Succesful vote!";
        }
      }
    });
    this.jokesRatings.sort(orderByRating);
    return msg;
  }
  downvoteM() {
    var msg = "You have already voted this joke! Try next one";
    this.jokesRatings.forEach(element => {
      if (element.joke.id === this.displayingRandomJoke.id) {
        if (element.voted == false) {
          element.rating--;
          element.voted = true;
          msg = "Succesful vote!";
        }
      }
    });
    this.jokesRatings.sort(orderByRating);
    return msg;
  }
  addToUserJokesM(userJoke) {
    this.userJokes.push(userJoke);
  }
}
//User joke var and objects

function UserJoke(email, jokeText, rating) {
  this.email = email;
  this.jokeText = jokeText;
  this.rating = rating;
}

/* export default Modelo; */
