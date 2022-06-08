import React from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../utility/axios";
import Movies from "../components/Movies";

const Search: React.FC = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const q = searchParam.get("q") || "";
  // const q = new URLSearchParams(window.location.search).get("q");
  const [movies, setMovies] = React.useState<any[]>([]);

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

  return <Movies movies={movies} title="Results" />;
};

export default Search;
