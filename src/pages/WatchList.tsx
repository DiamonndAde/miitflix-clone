import React from "react";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original";

const WatchList: React.FC = () => {
  const [localMovies, setLocalMovies] = React.useState<any[]>(() => {
    const localData = localStorage.getItem("movies");
    return localData ? JSON.parse(localData) : [];
  });

  const handleWatchlist = (movie: any) => {
    const filteredMovie = localMovies.filter(
      (movies: any) => movies.id !== movie.id
    );
    setLocalMovies(filteredMovie);
  };

  React.useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(localMovies));
  }, [localMovies]);
  // console.log(movies);

  return (
    <div className="row__list">
      {/* Title */}
      <div className="row__title">
        <h1>My Watch List</h1>
        <div className="row__wrapper">
          {/* Movies */}
          {localMovies.map((movie: any) => (
            <React.Fragment key={movie.id}>
              <div className="movie">
                <Link to={`/details/${movie.id}`}>
                  <img
                    key={movie.id}
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                  <div className="overlay">
                    <div className="movie__title">{movie.name}</div>
                    <div className="movie__rating">{movie.vote_average}/10</div>
                    <div className="movie__plot">{movie.overview}</div>
                  </div>
                </Link>
                <div
                  data-toggled="true"
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

export default WatchList;
