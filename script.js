console.log("Netflix Clone Loaded");

const movies = document.querySelectorAll(".movie img");

movies.forEach(movie => {
    movie.addEventListener("click", () => {
        alert("Movie clicked!");
    });
});
