import React from "react";
import axios from "../utility/axios";
import "../css/Row.css";
import Movies from "./Movies";

const Row: React.FC<{
  title: string;
  fetchUrl: string;
}> = ({ title, fetchUrl }: { title: string; fetchUrl: string }) => {
  const [movies, setMovies] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      //https://api.themoviedb.org/3/ then concat the fetchUrl
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return <Movies movies={movies} title={title} />;
};

export default Row;
