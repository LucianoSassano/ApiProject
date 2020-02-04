class Modelo {
  constructor() {
    this.randomJoke = "";
    this.displayingRandomJoke = "";
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
  votoPositivo(){
    var votado ;
    this.jokesRatings.forEach(element => {
      if (element.joke.id === displayingRandomJoke.id) {
        if (element.voted == false) {
          element.rating++;
          element.voted = true;
          return votado = true
        }if(element.voted == true){
            return votado = true;
        }
      }
    });
    jokesRatings.sort(orderByRating);
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
