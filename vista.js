class Vista {
  constructor(controlador) {
    this.controlador = controlador;
    this.init();
  }
  init() {
    //DOMContentLoaded

    document.addEventListener("DOMContentLoaded", function() {
      controlador.requireJokesArray();
      controlador.requireJokesRatingsArray();
      vista.fetchJokeFromApi(); // To make sure it doesn't start empty
      document
        .querySelector("#generate")
        .addEventListener("click", vista.displayRandomJoke);

      document
        .querySelector("#topRated1")
        .addEventListener("click", vista.displayTopThree);
      document
        .querySelector("#topRated2")
        .addEventListener("click", vista.displayTopThree);
      document
        .querySelector("#topRated3")
        .addEventListener("click", vista.displayTopThree);

      document
        .querySelector("#like-btn")
        .addEventListener("click", vista.upvoteJoke);

      document
        .querySelector("#dislike-btn")
        .addEventListener("click", vista.downvoteJoke);

      document
        .getElementById("footer-form")
        .addEventListener("submit", vista.sendJoke);
    });
  }

  //Fetch from API and data manipulation when receiving the promise
  fetchJokeFromApi() {
    async function getJokeApi() {
      try {
        var response = await fetch(
          "https://official-joke-api.appspot.com/jokes/random"
        );
        var data = await response.json();

        return data;
      } catch (error) {
        throw error;
      }
    }
    getJokeApi()
      .then(function(data) {
        controlador.assignRandomJokeC(data);
        controlador.addRandomJokeToArrayC();
        controlador.addRandomJokeToRatingsArrayC();

        vista.restoreButtons();
      })
      .catch(function(e) {
        console.error("We had a problem reaching the API!");
      });
  }

  // Display Functions

  displayRandomJoke() {
    vista.disableButtons();
    vista.fetchJokeFromApi();
    document.querySelector(
      "#setupRandom"
    ).textContent = controlador.getRandomJoke().setup;
    document.querySelector(
      "#punchlineRandom"
    ).textContent = controlador.getRandomJoke().punchline;
  }

  displayTopThree(event) {
    var index = event.target.closest("li").value;
    var jokeAux = controlador.getTopJoke(index);
    document.querySelector("#setupRandom").textContent = jokeAux.setup;
    document.querySelector("#punchlineRandom").textContent = jokeAux.punchline;
  }

  // Upvote and downvote Functions

  upvoteJoke() {
    vista.disableButtons();
    alert(controlador.upvoteC());
    vista.displayRandomJoke();
  }

  downvoteJoke() {
    vista.disableButtons();
    alert(controlador.downvoteC());
    vista.displayRandomJoke();
  }

  //User joke receive funtionality

  sendJoke(event) {
    event.preventDefault();

    var mailAdress;
    var jokeText;

    mailAdress = document.getElementById("email-input").value;
    jokeText = document.getElementById("joke-input").value;
    var userJoke = new UserJoke(mailAdress, jokeText, 0);
    controlador.addToUserJokesC(userJoke);
    event.target.reset();
  }

  disableButtons() {
    document.querySelector("#generate").textContent = "Loading...";
    document.querySelector("#generate").disabled = true;
    document.querySelector("#dislike-btn").disabled = true;
    document.querySelector("#like-btn").disabled = true;
  }

  restoreButtons() {
    document.querySelector("#generate").disabled = false;
    document.querySelector("#like-btn").disabled = false;
    document.querySelector("#dislike-btn").disabled = false;
    document.querySelector("#generate").textContent = "HIT ME!";
  }
}

// jokesRatings order Comparator callback for sort function

function orderByRating(a, b) {
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

/* export default Vista; */
