const IMGPATH = "https://image.tmdb.org/t/p/w1280"
const BASE_URL = "https://api.themoviedb.org/3"

const API_KEY = "&api_key=04c35731a5ee918f014970082a0088b1"
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc" + API_KEY

const TRENDING_MOVIE = BASE_URL + "/trending/movie/week" + API_KEY
const NOW_PLAYING = BASE_URL + "/movie/now_playing?page=1" + API_KEY

const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY + "&query="

const FILTER_BY_GENRE = API_URL + "&with_genres="

const GENRES = [{ "id": 28, "name": "Action" }, { "id": 12, "name": "Adventure" }, { "id": 16, "name": "Animation" }, { "id": 35, "name": "Comedy" }, { "id": 80, "name": "Crime" }, { "id": 99, "name": "Documentary" }, { "id": 18, "name": "Drama" }, { "id": 10751, "name": "Family" }, { "id": 14, "name": "Fantasy" }, { "id": 36, "name": "History" }, { "id": 27, "name": "Horror" }, { "id": 10402, "name": "Music" }, { "id": 9648, "name": "Mystery" }, { "id": 10749, "name": "Romance" }, { "id": 878, "name": "Science Fiction" }, { "id": 10770, "name": "TV Movie" }, { "id": 53, "name": "Thriller" }, { "id": 10752, "name": "War" }, { "id": 37, "name": "Western" }]


$(document).ready(function () {
    async function getMovies(URL) {

        try {
            const data = await fetch(URL).then((res) => res.json())
            return data
        } catch (error) {
            console.log(error.message)
            return null
        }
    }

    // MARK Send all movie to html    
    async function showMoviePosters(movies) {

        const main = document.getElementById("content");
        main.innerHTML = "";
        movies.forEach((movie) => {

            const { poster_path, title, vote_average, overview, release_date } = movie;
            if (poster_path != null && vote_average != 0) {
                // console.log(vote_average + "" + poster_path)
                const movieEl = document.createElement("div");
                movieEl.classList.add("movie");
                movieEl.innerHTML = `

                <img src="${IMGPATH + poster_path}"  
                    alt="${title}" class="poster">

                    <h3 class="movie-title">
                        <p class="${getColorVoteAverage(vote_average)}  rating">${vote_average}</p>
                        <p> ${title} </p>
                    </h3>

                    <div class="overview">
                        <a href="#">
                            <h3>${title}</h3>
                            <p>${(!release_date) ? "No Date" : release_date.slice(0, 4)}</p>
                            <p class="summary">
                                ${overview}
                            </p>
                            <span class="seemore">See more→</span>
                        </a>
                    </div>
    
                `;

                main.appendChild(movieEl);
            }
        });
    }

    // MARK Hero SLider  
    async function showMovieHeroBanners(movies) {

        const heroBanner = document.getElementById("hero-slider");
        heroBanner.innerHTML = "";
        movies = movies.slice(0, 10);
        movies.forEach((movie) => {

            const { poster_path, title, vote_average, overview, release_date, backdrop_path, genre_ids } = movie;
            const movieEl = document.createElement("div");
            movieEl.classList.add("hero-banner");
            movieEl.innerHTML = `
                    <div class="hero-img">
                        <img src="${IMGPATH + backdrop_path}" alt="Hero banner">
                    </div>
                    <div class="hero-detail">
                        <img src="${IMGPATH + poster_path}" alt="" srcset="">
                        <h1>${title}</h1>
                        <div class="subtitle">
                            <p>${release_date.slice(0, 4)}</p>
                            <p class="${getColorVoteAverage(vote_average)} font">${vote_average}</p>
                            <p>
                            <a href="#" id="${genre_ids}">${genre_ids}</a>
                        </p>
                        </div>
                        <p class="desc">
                        ${overview}
                        </p>
                        <a href="#">Show more </a>
                    </div>
 
        `;

            heroBanner.appendChild(movieEl);
        });



        $("#hero-slider").slick({
            infinite: true,
            variableWidth: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false

        });
    }

    function ShowMovieGenres() {


        const all_tags = document.getElementById("all-tags");
        all_tags.innerHTML = "";

        GENRES.forEach((genre) => {

            const { id, name } = genre;
            const tagsEl = document.createElement("a");
            tagsEl.classList.add("color-tag", "genre");
            tagsEl.setAttribute("href", "#")
            tagsEl.setAttribute("id", id)
            tagsEl.innerHTML = name;
            all_tags.appendChild(tagsEl);
            tagsEl.addEventListener("click", (e) => {
                e.preventDefault();
                let selected_tags = []
                tagsEl.classList.toggle("selected-genre")
                document.querySelectorAll(".selected-genre").forEach((a) => { selected_tags.push(a.id) })
                console.log(FILTER_BY_GENRE + encodeURI(selected_tags.join(",")))
                getshowMoviePosters(FILTER_BY_GENRE + encodeURI(selected_tags.join(",")))
            })
        });

    }


    // MARK Get and Show movies
    const getshowMoviePosters = async (URL) => {
        const movies = await getMovies(URL)
        movies && showMoviePosters(movies.results)
    }

    // MARK Get and Show movies
    const getshowMovieHeroBanners = async (URL) => {
        const movies = await getMovies(URL)
        movies && showMovieHeroBanners(movies.results)
    }





    function getColorVoteAverage(vote) {
        if (vote >= 8)
            return "green-rate";
        if (vote >= 5)
            return "orange-rate";
        if (vote >= 0)
            return "red-rate";

    }


    // MARK Search Mehod
    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const searchValue = document.getElementById("search").value;
        if (searchValue != "") {
            getshowMoviePosters(SEARCH_URL + searchValue)
            searchValue.value = "";
        }
    });



    function homePage() {
        getshowMoviePosters(API_URL)
        getshowMovieHeroBanners(NOW_PLAYING)
        ShowMovieGenres()
    }
    homePage()





});

