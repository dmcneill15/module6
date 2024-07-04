function MoviesList() {
    // collection of objects representing movies
    const movies = [
        {
            title: "The Shawshank Redemption",
            year: 1994,
            synopsis: "Two imprisoned men find redemption.",
        },
        {
            title: "The Dark Knight",
            year: 2008,
            synopsis: "Batman fights the menace known as the Joker.",
        },
        {
            title: "Interstellar",
            year: 2014,
            synopsis: "Explorers travel through a wormhole in space.",
        },
    ];
    return (
        <div className="MoviesList componentBox">
            <ul> {/* iterate over each movie, print the title in a list */}
                {movies.map(movie => (
                    <li>{movie.title}, {movie.year}</li>
                ))}
            </ul>
        </div>
    )
}
export default MoviesList;

export function MoviesList2() {
    // collection of objects representing movies
    const movies = [
        {
            title: "The Shawshank Redemption",
            year: 1994,
            synopsis: "Two imprisoned men find redemption.",
        },
        {
            title: "The Dark Knight",
            year: 2008,
            synopsis: "Batman fights the menace known as the Joker.",
        },
        {
            title: "Interstellar",
            year: 2014,
            synopsis: "Explorers travel through a wormhole in space.",
        },
    ];

    //NOTE: Arrow function inside .map implicitly returns everything after the arrow.
    //If we instead use curly braces, we need to explicitly include a return statement as it’s no longer implied. Try it and see!
    const movieItems = movies.map(movie => (
        <li>{movie.title}, {movie.year}</li>
    ));

    const movieItems2 = movies.map(movie => {
        return  <li>{movie.title}, {movie.year}</li>;
    });

    return (
        <div className="MoviesList componentBox">
            <ul> {movieItems2} </ul>
        </div>
    )
}