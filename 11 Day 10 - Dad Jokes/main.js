const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const APIURL = "https://icanhazdadjoke.com";

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

//Asynchronic/Await 
async function generateJoke() {

    const config = {

        headers: {
            'Accept': 'application/json'
        },
    }



    const response = await fetch(APIURL, config);
    const data = await response.json();
    jokeEl.innerHTML = data.joke;
}


// function generateJoke() {

//     const config = {

//         headers: {
//             'Accept': 'application/json'
//         },
//     }

//     fetch(APIURL, config)
//         .then(response => response.json())
//         .then((data) => {

//             jokeEl.innerHTML = data.joke;
//         })
// }