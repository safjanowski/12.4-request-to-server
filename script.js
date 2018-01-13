(function() {
  var button = document.getElementById('get-joke');
  var paragraph = document.getElementById('joke');
  var icndbJokes = getJokeFrom('http://api.icndb.com/jokes/random');

  button.addEventListener('click', function() {
    icndbJokes(function(response) {
      paragraph.innerHTML = response
    });
  });

  icndbJokes(function(response) {
    paragraph.innerHTML = response
  });

  function getJokeFrom(url) {
    var xhr = new XMLHttpRequest();

    return function(cb) {
      xhr.open('GET', url);
      xhr.addEventListener('load', function() {
        cb(JSON.parse(xhr.response).value.joke)
      });
      xhr.send();
    }
  }
}())