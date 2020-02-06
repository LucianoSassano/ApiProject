class Modelo {
  constructor() {
    this.randomJoke = [];
    this.displayingRandomJoke = "";
    this.jokes = [];
    this.jokesRatings = [];
    this.userJokes = [];
  }

  assignRandomJoke(joke) {
    this.displayingRandomJoke = this.randomJoke;
    this.randomJoke = this.joke;
  }

  addRandomJokeToArray() {
    if (
      this.jokes.find(element => {
        return element.id == this.jokes.id;
      }) == undefined
    ) {
      this.jokes.push(this.randomJoke);
      this.writeJokesLocalStorage();
    }
  }

  addJokeRatingToArray(){
    if(
      this.jokesRatings.find((element) =>{
        element.joke.id == Modelo.randomJoke.id

      }) == undefined) {
        let ranJoke = {
          joke = this.randomJoke,
          rating = Math.floor(Math.random()*100),
          voted = false,
        }
          this.jokesRatings.push(element);
          this.jokesRatings.sort(this.orderByRating);
          this.writeJokesRatingsLocalStorage();
      }

  }

  agregarUserJoke(joke) {
    this.userJokes.push(joke);
  }

  //Local Storage managment

  writeJokesLocalStorage() {
    this.jsonJokes = JSON.stringify(jokes);
    localStorage.setItem("jokes", jsonJokes);
  }

  readJokesLocalStorage() {
    this.jsonJokes = localStorage.getItem("jokes");
    let aux = JSON.parse(this.jsonJokes);
    if (aux != null) {
      this.jokes = aux;
    }
  }
  writeJokesRatingsLocalStorage() {
    this.jsonJokesRatings = JSON.stringify(jokesRatings);
    localStorage.setItem("jokesRatings", jsonJokesRatings);
  }

  readJokesRatingsLocalStorage() {
    this.jsonJokesRatings = localStorage.getItem("jokesRatings");
    let aux = JSON.parse(this.jsonJokes);
    if (aux != null) {
      this.jokesRatings = aux;
    }
  }

  orderByRating(a, b) {
    this.rating1 = a.rating;
    this.rating2 = b.rating;

    let comparison = 0;
    if (rating1 < rating2) {
      comparison = 1;
    } else if (rating1 > rating2) {
      comparison = -1;
    }
    return comparison;
  }

  positiveVote() {
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

function UserJoke(email, jokeText, rating) {
  this.email = email;
  this.jokeText = jokeText;
  this.rating = rating;
}

export default Modelo;
