//Setting of vars and event listeners

var randomJoke;
var displayingRandomJoke;
var jokes = [];
var jokesRatings = [];

//DOMContentLoaded

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

  document.querySelector("#upvoteButton").addEventListener("click", upvoteJoke);
  document
    .querySelector("#downvoteButton")
    .addEventListener("click", downvoteJoke);
});

//Fetch from API and data manipulation when receiving the promise

function fetchJokeFromApi() {
  async function getJokeApi() {
    try {
      config = {
        method: "GET"
      };

      var response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random",
        config
      );
      var data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }
  getJokeApi()
    .then(function(data) {
      randomJoke = data;
      if (
        jokes.find(function(element) {
          return element.id == randomJoke.id;
        }) == undefined
      ) {
        jokes.push(randomJoke);
        writeJokesLocalStorage();
      }
      if (
        jokesRatings.find(function(element) {
          return element.joke.id == randomJoke.id;
        }) == undefined
      ) {
        var elem = {
          joke: randomJoke,
          rating: 0
        };
        jokesRatings.push(elem);
        jokesRatings.sort(orderByRating);
        writeJokesRatingsLocalStorage();
      }
    })
    .catch(function(e) {
      console.error("We had a problem reaching the API!");
      console.log(e);
    });

  return randomJoke;
}

//Local Storage Functions

function writeJokesLocalStorage() {
  var jsonJokes = JSON.stringify(jokes);
  localStorage.setItem("jokes", jsonJokes);
}

function readJokesLocalStorage() {
  var jsonJokes = localStorage.getItem("jokes");
  return JSON.parse(jsonJokes);
}
function writeJokesRatingsLocalStorage() {
  var jsonJokesRatings = JSON.stringify(jokesRatings);
  localStorage.setItem("jokesRatings", jsonJokesRatings);
}

function readJokesRatingsLocalStorage() {
  var jsonJokesRatings = localStorage.getItem("jokesRatings");
  return JSON.parse(jsonJokesRatings);
}

// Display Functions

function displayRandomJoke() {
  displayingRandomJoke = randomJoke;
  fetchJokeFromApi();
  document.querySelector("#setupRandom").textContent = randomJoke.setup;
  document.querySelector("#punchlineRandom").textContent = randomJoke.punchline;
}

function displayTopThree() {
  var topRated = document.querySelectorAll(".topRated");
  topRated.forEach(function(element, index) {
    element.children[0].textContent = jokesRatings[index].joke.setup;
    element.children[1].textContent = jokesRatings[index].joke.punchline;
    element.children[2].textContent = "Score: " + jokesRatings[index].rating;
  });
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

// Upvote and downvote Functions

function upvoteJoke() {
  jokesRatings.forEach(element => {
    if (element.joke.id === displayingRandomJoke.id) element.rating++;
  });
  jokesRatings.sort(orderByRating);
  displayRandomJoke();
}

function downvoteJoke() {
  jokesRatings.forEach(element => {
    if (element.joke.id === displayingRandomJoke.id) element.rating--;
  });
  jokesRatings.sort(orderByRating);
  displayRandomJoke();
}
