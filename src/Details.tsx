import React from "react";
import axios from "./axios";
import "./Details.css";
import { useParams } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original";
const Details: React.FC = () => {
  const [movie, setMovie] = React.useState<any>([]);
  const [localMovies, setLocalMovies] = React.useState<any[]>(() => {
    const localData = localStorage.getItem("movies");
    return localData ? JSON.parse(localData) : [];
  });
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchData() {
      //https://api.themoviedb.org/3/ then concat the fetchUrl
      const request = await axios.get(
        `tv/${id}?api_key=7fd727d5175ac112f4c3b1ae6d2ccbc9&language=en-US`
      );
      setMovie(request.data);
      return request;
    }
    fetchData();
  }, [id]);

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
    <div className="details">
      <img
        src={movie.backdrop_path ? `${base_url}${movie.backdrop_path}` : ""}
        alt={movie.original_title}
      />
      <div className="details__inner">
        <h1>{movie.name}</h1>
        <div className="details__description">{movie.overview}</div>
        <button
          className={checkId(movie.id) ? "details__btn" : "details__removeBtn"}
          onClick={() => handleWatchlist(movie)}
        >
          {`${
            checkId(movie.id) ? "- Remove from watch list" : "+ Add to watch"
          }`}
          list
        </button>
      </div>
    </div>
  );
};

export default Details;
