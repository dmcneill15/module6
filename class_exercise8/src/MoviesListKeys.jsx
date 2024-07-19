import { useState } from "react";

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

  const handleAddMovie = (newMovie) => {
    newMovie.id = movies.length + 1; // unreliable but succinct
    setCurrentMovies([...movies, newMovie])
  }


  //although we aren't using the key, it needs to be there because Movie is using a list
  const movieItems = movies.map(movie => (
    <Movie key={movie.id} title={movie.title} year={movie.year} synopsis={movie.synopsis} />
  ));

  return (
    <div className="MoviesList componentBox">
      <ul> {movieItems} </ul>
      <AddMovieForm onAddMovie={handleAddMovie} />
    </div>
  );
}

//create a separate function for displaying each movie
function Movie({ title, year, synopsis }) {
  return (
    <li>
      <p>{title}, {year}, {synopsis}</p>
    </li>
  );
}

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  // ++ add support for the synopsis field as well, here and below
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({ title, year })
  }
  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>Movie Title:
          <input name="title" value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>Year Released:
          <input name="year" type="number" value={year}
            onChange={(e) => setYear(e.target.value)} />
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  )
}