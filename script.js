var joke = getJokeFrom('http://api.icndb.com/jokes/random')

var button = document.getElementById('get-joke');
var paragraph = document.getElementById('joke');

button.addEventListener('click', function() {
  joke();
});

function getJokeFrom(url) {
  var xhr = new XMLHttpRequest();

  return function() {
    xhr.open('GET', url);
    xhr.addEventListener('load', function() {
      var response = JSON.parse(xhr.response);
      paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
  }

}

joke();