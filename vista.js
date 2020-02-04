import Controlador from "./controlador";

class Vista {
  constructor(controlador) {
    this.controlador = controlador;
  }
  // Display Functions
  displayRandomJoke() {
    document.querySelector("#generate").textContent = "Loading...";
    document.querySelector("#generate").disabled = true;
    displayingRandomJoke = randomJoke;
    fetchJokeFromApi();
    document.querySelector("#setupRandom").textContent = randomJoke.setup;
    document.querySelector("#punchlineRandom").textContent =
      randomJoke.punchline;
  }

  displayTopThree(event) {
    var index = event.target.closest("li").value;
    displayingRandomJoke = jokesRatings[index].joke;
    document.querySelector("#setupRandom").textContent =
      displayingRandomJoke.setup;
    document.querySelector("#punchlineRandom").textContent =
      displayingRandomJoke.punchline;
  }
  //User joke receive funtionality

  sendJoke(event) {
    event.preventDefault();
    var mailAdress;
    var jokeText;
    mailAdress = document.getElementById("email-input").value;
    jokeText = document.getElementById("joke-input").value;
    var userJoke = new UserJoke(mailAdress, jokeText, 0);
    this.controlador.agregarUserJoke(userJoke);
    event.target.reset();
  }
  domContentLoad() {
    document.addEventListener("DOMContentLoaded", function() {
      fetchJokeFromApi(); // To make sure it doesn't start empty

      //Only read if storage isn't null
      if (readJokesLocalStorage() != null) {
        jokes = readJokesLocalStorage();
      }
      //Only read if storage isn't null
      if (readJokesRatingsLocalStorage() != null) {
        jokesRatings = readJokesRatingsLocalStorage();
      }

      document
        .querySelector("#generate")
        .addEventListener("click", displayRandomJoke);

      document
        .querySelector("#topRated1")
        .addEventListener("click", displayTopThree);
      document
        .querySelector("#topRated2")
        .addEventListener("click", displayTopThree);
      document
        .querySelector("#topRated3")
        .addEventListener("click", displayTopThree);

      document.querySelector("#like-btn").addEventListener("click", upvoteJoke);

      document
        .querySelector("#dislike-btn")
        .addEventListener("click", downvoteJoke);

      document
        .getElementById("footer-form")
        .addEventListener("submit", sendJoke);
    });
  }
  // Upvote and downvote Functions

    upvoteJoke() {
    document.querySelector("#like-btn").disabled = true;
    this.controlador.votoPositivo();
    displayRandomJoke();
  }
  
    downvoteJoke() {
    document.querySelector("#dislike-btn").disabled = true;
    jokesRatings.forEach(element => {
      if (element.joke.id === displayingRandomJoke.id) {
        if (element.voted == false) {
          element.rating--;
          element.voted = true;
        } else alert("You have already voted this joke! Try next one");
      }
    });
    jokesRatings.sort(orderByRating);
    displayRandomJoke();
  }
  
}

export default Vista;