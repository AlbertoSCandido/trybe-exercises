const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
      .then((json => {
        let area = document.getElementById('jokeContainer')
        area.innerText = json.joke
      }))
};

window.onload = () => fetchJoke();