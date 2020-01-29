var randomJoke;

function fetchJokeFromApi() {
  async function getJokeApi() {
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

  getJokeApi()
    .then(function(data) {
      randomJoke = data;
    })
    .catch(function(e) {
      console.error("We had a problem reaching the API!");
      console.log(e);
    });
}
fetchJokeFromApi();
