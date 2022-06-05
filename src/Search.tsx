import React from "react";
import { Link } from "react-router-dom";
import axios from "./axios";
import Imna from "./image-not-available.jpg";

const base_url = "https://image.tmdb.org/t/p/original";

const Search: React.FC = () => {
  const q = new URLSearchParams(window.location.search).get("q");
  const [movies, setMovies] = React.useState<any[]>([]);
  const [localMovies, setLocalMovies] = React.useState<any[]>(() => {
    const localData = localStorage.getItem("movies");
    return localData ? JSON.parse(localData) : [];
  });

  React.useEffect(() => {
    async function fetchData() {
      //https://api.themoviedb.org/3/ then concat the fetchUrl
      const request = await axios.get(
        `search/tv?api_key=7fd727d5175ac112f4c3b1ae6d2ccbc9&language=en-US&query=${q}`
      );
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [q]);

  const checkId = (movieId: number) => {
    for (var i in localMovies) {
      if (localMovies[i].id === movieId) {
        return true;
      }
    }
    return false;
  };

  const handleWatchlist = (movie: any) => {
    movie["watched"] = !checkId(movie.id);

    if (movie.watched) {
      setLocalMovies([...localMovies, movie]);
    } else {
      const filteredMovie = localMovies.filter(
        (movies: any) => movies.id !== movie.id
      );

      setLocalMovies(filteredMovie);
    }
  };

  React.useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(localMovies));
  }, [localMovies]);

  return (
    <div className="row__list">
      {/* Title */}
      <div className="row__title">
        <h1>Results</h1>
        <div className="row__wrapper">
          {/* Movies */}
          {movies.map((movie: any) => (
            <React.Fragment key={movie.id}>
              <div className="movie">
                <Link to={`/details/${movie.id}`}>
                  <img
                    key={movie.id}
                    src={
                      movie.poster_path
                        ? `${base_url}${movie.poster_path}`
                        : Imna
                    }
                    alt={movie.original_title}
                  />
                  <div className="overlay">
                    <div className="movie__title">{movie.name}</div>
                    <div className="movie__rating">{movie.vote_average}/10</div>
                    <div className="movie__plot">{movie.overview}</div>
                  </div>
                </Link>
                <div
                  data-toggled={checkId(movie.id) ? "true" : "false"}
                  onClick={() => handleWatchlist(movie)}
                  className="listToggle"
                >
                  <div>
                    <i className="fa fa-fw fa-plus"></i>
                    <i className="fa fa-fw fa-check"></i>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
