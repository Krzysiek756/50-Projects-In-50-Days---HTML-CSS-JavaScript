const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const APIURL = "https://icanhazdadjoke.com";

jokeBtn.addEventListener('click', generateJoke);

generateJoke();


function generateJoke() {

    const config = {

        headers: {
            'Accept': 'application/json'
        },
    }

    fetch(APIURL, config)
        .then(response => response.json())
        .then((data) => {

            jokeEl.innerHTML = data.joke;
        })
}