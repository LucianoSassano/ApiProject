var random10Jokes;
var randomJoke;

function fetch10FromApi() {
  async function getJokesApi() {
    try {
      config = {
        method: "GET"
      };
      var response = await fetch(
        "https://official-joke-api.appspot.com/random_ten",
        config
      );
      var data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  getJokesApi()
    .then(function(data) {
      random10Jokes = data;
    })
    .catch(function(e) {
      console.error("We had a problem reaching the API!");
      console.log(e);
    });
}

function fetch1FromApi() {
  async function getJokesApi() {
    try {
      config = {
        method: "GET"
      };
      var response = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
        config
      );
      var data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  getJokesApi()
    .then(function(data) {
      randomJoke = data;
    })
    .catch(function(e) {
      console.error("We had a problem reaching the API!");
      console.log(e);
    });
}
fetch10FromApi();
fetch1FromApi();
