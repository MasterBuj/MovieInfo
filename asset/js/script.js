const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const TRENDINGMOVIE = "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=04c35731a5ee918f014970082a0088b1"

const NOWPLAYING = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=04c35731a5ee918f014970082a0088b1"


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
            const movieEl = document.createElement("div");
            movieEl.classList.add("movie");
            console.log(movie)
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
                        <p>${(release_date) ? "No Date" : release_date.slice(0, 4)}</p>
                        <p class="summary">
                            ${overview}
                        </p>
                        <span class="seemore">See more→</span>
                    </a>
                </div>
 
        `;

            main.appendChild(movieEl);
        });
    }

    // MARK Hero SLider  
    async function showMovieHeroBanners(movies) {

        const heroBanner = document.getElementById("hero-slider");
        heroBanner.innerHTML = "";
        movies = movies.slice(0, 10);
        movies.forEach((movie) => {
            console.log("every each")

            const { poster_path, title, vote_average, overview, release_date, backdrop_path } = movie;
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
                            <p>${vote_average}</p>
                            <p>
                                <a href="#">Action</a>
                                <a href="#">Thriller</a>
                                <a href="#">Crime </a>
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
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false

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
        const searchEl = document.getElementById("search");
        const searchValue = searchEl.value;
        if (searchValue) {
            getMovies(SEARCHAPI + searchValue);
            searchEl.value = "";
        }
    });


    function homePage() {
        // showMoviePosters(discoverMovie)
        getshowMoviePosters(APIURL)
        getshowMovieHeroBanners(NOWPLAYING)
    }
    homePage()

});

