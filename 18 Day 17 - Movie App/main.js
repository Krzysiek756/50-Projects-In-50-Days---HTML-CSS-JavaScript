const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";















// const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI =
//     "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// const APIGENRES = "https://api.themoviedb.org/3/genre/movie/list?api_key=04c35731a5ee918f014970082a0088b1&page=1";

// const genres = [{
//         "id": 28,
//         "name": "Action"
//     },
//     {
//         "id": 12,
//         "name": "Adventure"
//     },
//     {
//         "id": 16,
//         "name": "Animation"
//     },
//     {
//         "id": 35,
//         "name": "Comedy"
//     },
//     {
//         "id": 80,
//         "name": "Crime"
//     },
//     {
//         "id": 99,
//         "name": "Documentary"
//     },
//     {
//         "id": 18,
//         "name": "Drama"
//     },
//     {
//         "id": 10751,
//         "name": "Family"
//     },
//     {
//         "id": 14,
//         "name": "Fantasy"
//     },
//     {
//         "id": 36,
//         "name": "History"
//     },
//     {
//         "id": 27,
//         "name": "Horror"
//     },
//     {
//         "id": 10402,
//         "name": "Music"
//     },
//     {
//         "id": 9648,
//         "name": "Mystery"
//     },
//     {
//         "id": 10749,
//         "name": "Romance"
//     },
//     {
//         "id": 878,
//         "name": "Science Fiction"
//     },
//     {
//         "id": 10770,
//         "name": "TV Movie"
//     },
//     {
//         "id": 53,
//         "name": "Thriller"
//     },
//     {
//         "id": 10752,
//         "name": "War"
//     },
//     {
//         "id": 37,
//         "name": "Western"
//     }
// ]


// const main = document.getElementById("main");
// const form = document.getElementById("form");
// const search = document.getElementById("search");
// const tagsEl = document.getElementById("tags");

// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const current = document.getElementById("current");


// var currentPage = 1;
// var nextPage = 2;
// var prevPage = 3;
// var lastUrl = '';
// var totalPages = 100;



// var selectedGenre = [];
// setGenre();

// function setGenre() {
//     tagsEl.innerHTML = '';
//     genres.forEach(genre => {
//         const t = document.createElement('div');
//         t.classList.add('tag');
//         t.id = genre.id;
//         t.innerText = genre.name;
//         t.addEventListener('click', () => {
//             if (selectedGenre.length == 0) {
//                 selectedGenre.push(genre.id);
//             } else {
//                 if (selectedGenre.includes(genre.id)) {
//                     selectedGenre.forEach((id, idx) => {
//                         if (id == genre.id) {
//                             selectedGenre.splice(idx, 1);
//                         }
//                     })
//                 } else {
//                     selectedGenre.push(genre.id);
//                 }
//             }
//             console.log(selectedGenre)
//             getMovies(APIURL + '&with_genres=' + encodeURI(selectedGenre.join(',')))
//             highlightSelection()
//         })
//         tagsEl.append(t);
//     })
// }

// function highlightSelection() {
//     const tags = document.querySelectorAll('.tag');
//     tags.forEach(tag => {
//         tag.classList.remove('highlight')
//     })
//     clearBtn()
//     if (selectedGenre.length != 0) {
//         selectedGenre.forEach(id => {
//             const hightlightedTag = document.getElementById(id);
//             hightlightedTag.classList.add('highlight');
//         })
//     }

// }

// function clearBtn() {
//     let clearBtn = document.getElementById('clear');
//     if (clearBtn) {
//         clearBtn.classList.add('highlight')
//     } else {

//         let clear = document.createElement('div');
//         clear.classList.add('tag', 'highlight');
//         clear.id = 'clear';
//         clear.innerText = 'Clear x';
//         clear.addEventListener('click', () => {
//             selectedGenre = [];
//             setGenre();
//             getMovies(APIURL);
//         })
//         tagsEl.append(clear);
//     }

// }


// //initial get fav movies
// getMovies(APIURL);

// async function getMovies(url) {
//     lastUrl = url;
//     const resp = await fetch(url)
//     const respData = await resp.json();

//     if (respData.results.length !== 0) {
//         showMovies(respData.results);
//         currentPage = respData.page; // pagination
//         nextPage = currentPage + 1;
//         prevPage = currentPage - 1;
//         totalPages = respData.total_pages;


//         current.innerText = currentPage;

//         if (currentPage <= 1) {
//             prev.classList.add('disabled');
//             next.classList.remove('disabled')
//         } else if (currentPage >= totalPages) {
//             prev.classList.remove('disabled');
//             next.classList.add('disabled')
//         } else {
//             prev.classList.remove('disabled');
//             next.classList.remove('disabled')
//         }


//         document.body.scrollIntoView({
//             behavior: 'smooth'
//         })

//     } else {
//         main.innerHTML = `<h1 class="main__resoults">No Results Found</h1>`
//     }

// }

// function showMovies(movies) {
//     //clear main
//     main.innerHTML = "";

//     movies.forEach((movie) => {

//         const {
//             poster_path,
//             title,
//             vote_average,
//             overview,
//         } = movie;

//         const movieElement = document.createElement('div');
//         movieElement.classList.add('movie');

//         movieElement.innerHTML = `
//         <img 
//         src="${poster_path? IMGPATH+poster_path: "http://via.placeholder.com/1080x1580" }"
//         />

//         <div class="movie-info">
//             <h3>${title}</h3>
//             <span class="${getClassByRate(vote_average)}">${vote_average}</span> 
//         </div>
//         <div class="description">
//         <h4>Overview</h4>  
//         ${overview}
//         </div>
//   `
//         main.appendChild(movieElement);


//     });
// }



// function getClassByRate(vote) {
//     if (vote >= 8) {
//         return "green";
//     } else if (vote >= 5) {
//         return "orange";
//     } else {
//         return "red";
//     }
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const searchTerm = search.value;
//     selectedGenre = [];
//     setGenre();

//     if (searchTerm) {
//         getMovies(SEARCHAPI + searchTerm);

//         search.value = "";

//     } else {
//         getMovies(APIURL);
//     }
// });

// prev.addEventListener('click', () => {
//     if (prevPage > 0) {
//         pageCall(prevPage);
//     }
// })

// next.addEventListener('click', () => {
//     if (nextPage < totalPages) {
//         pageCall(nextPage);
//     }
// })

// function pageCall(page) {
//     let urlSplit = lastUrl.split('?');
//     let queryParams = urlSplit[1].split('&');
//     let key = queryParams[queryParams.length - 1].split('=');
//     if (key[0] != 'page') {
//         let url = lastUrl + '&page=' + page
//         getMovies(url);
//     } else {
//         key[1] = page.toString();
//         let a = key.join('=');
//         queryParams[queryParams.length - 1] = a;
//         let b = queryParams.join('&');
//         let url = urlSplit[0] + '?' + b
//         getMovies(url);
//     }
// }