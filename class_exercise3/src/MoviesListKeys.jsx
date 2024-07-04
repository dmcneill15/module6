export function MoviesListKeys() {
  // collection of objects representing movies
  const movies = [
    {
      id: 1, // items in data collections need unique IDs
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2, // unique ID
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3, // unique ID
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  //key prop is required for lists
  //Important to add for performance and reliability
  const movieItems = movies.map((movie) => (
    <li key={movie.id}>
      {movie.title}, {movie.year}
    </li>
  ));

  return (
    <div className="MoviesList componentBox">
      <ul> {movieItems} </ul>
    </div>
  );
}

export function MoviesListKeys2() {
  // collection of objects representing movies
  const movies = [
    {
      id: 1, // items in data collections need unique IDs
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2, // unique ID
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3, // unique ID
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  /*const movieItems = movies.map(movie => (
    <li>{movie.title}, {movie.year}</li>
));*/

//although we aren't using the key, it needs to be there because Movie is using a list
const movieItems= movies.map(movie =>(
    <Movie key={movie.id} title={movie.title} year={movie.year} synopsis={movie.synopsis} />
));

  return (
    <div className="MoviesList componentBox">
      <ul> {movieItems} </ul>
    </div>
  );
}

//create a separate function for dispplaying each movie
function Movie({title, year, synopsis}) {
  return (
    <li>
      <p>{title}, {year}, {synopsis}</p>
    </li>
  );
}
