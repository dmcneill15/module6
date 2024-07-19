import { useState } from "react";
import { useRef } from 'react';
//Controlled and uncontrolled components

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

  const [currentMovies, setCurrentMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    newMovie.id = movies.length + 1; // unreliable but works for now. Unreliable as many adds & deletes might result in repeated ids.
    setCurrentMovies([...currentMovies, newMovie]);
  }


  //although we aren't using the key, it needs to be there because Movie is using a list and needs to track each item
  const movieItems = currentMovies.map(movie => (
    <Movie key={movie.id} title={movie.title} year={movie.year} synopsis={movie.synopsis} />
  ));

  return (
    <div className="MoviesList componentBox">
      <ul> {movieItems} </ul>
      <AddMovieFormUncontrolledComponents onAddMovie={handleAddMovie} />
    </div>
  );
}// <AddMovieForm onAddMovie={handleAddMovie} />


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

//example to test the same function as above using uncontrolled components instead
/*Uncontrolled comopnents data is managed by the DOM itself - useRef allows access to manipulate DOM elements

useState - manages states within React. State changes cause rerender

useRef - does not trigger a rerender when changing the .current property of a ref
      - can be more efficient and straightforward when you don't needto track changes in real time*/
function AddMovieFormUncontrolledComponents({ onAddMovie }) {

  const titleRef = useRef(null);
  const yearRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const year = yearRef.current.value;
    onAddMovie({ title, year });  //pass an object with named properties
  }

  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>Movie Title:
          <input name="title" ref={titleRef} defaultValue="Default Title"/>
        </label>
        <label>Year Released:
          <input name="year" type="number" ref={yearRef} defaultValue="1970"/>
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  )
}
