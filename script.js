var joke = getJokeFrom('http://api.icndb.com/jokes/random')

var button = document.getElementById('get-joke');
var paragraph = document.getElementById('joke');

button.addEventListener('click', function() {
  joke(function(response) {
    paragraph.innerHTML = response
  });
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

joke(function(response) {
  paragraph.innerHTML = response
});