(function(xhr) {
  var button = document.getElementById('get-joke');
  var paragraph = document.getElementById('joke');
  var icndbJokes = getJokeFrom('http://api.icndb.com/jokes/random');
  var appendJoke = function(response) {
    paragraph.innerHTML = response
  }

  button.addEventListener('click', function() {
    icndbJokes(appendJoke);
  });

  icndbJokes(appendJoke);

  function getJokeFrom(url) {
    return function(cb) {
      xhr.open('GET', url);
      xhr.addEventListener('load', function() {
        cb(JSON.parse(xhr.response).value.joke)
      });
      xhr.send();
    }
  }
}(new XMLHttpRequest()))