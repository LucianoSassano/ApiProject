var request = new XMLHttpRequest();
request.open("GET", "https://official-joke-api.appspot.com/random_ten", true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(joke => {
      console.log(joke.id);
      console.log(joke.setup);
      console.log(joke.punchline);
    });
  } else {
    console.log("error");
  }
};
request.send();