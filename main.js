
const modelo = new Modelo;
const vista = new Vista(controlador);
const controlador = new Controlador(modelo);


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
          rating: Math.floor(Math.random() * 100),
          voted: false
        };
        jokesRatings.push(elem);
        jokesRatings.sort(orderByRating);
        writeJokesRatingsLocalStorage();
      }
      document.querySelector("#generate").disabled = false;
      document.querySelector("#like-btn").disabled = false;
      document.querySelector("#dislike-btn").disabled = false;
      document.querySelector("#generate").textContent = "HIT ME!";
    })
    .catch(function(e) {
      console.error("We had a problem reaching the API!");
      console.log(e);
    });

  return randomJoke;
}

// Upvote and downvote Functions

function upvoteJoke() {
  document.querySelector("#like-btn").disabled = true;
  jokesRatings.forEach(element => {
    if (element.joke.id === displayingRandomJoke.id) {
      if (element.voted == false) {
        element.rating++;
        element.voted = true;
      } else alert("You have already voted this joke! Try next one");
    }
  });
  jokesRatings.sort(orderByRating);
  displayRandomJoke();
}




