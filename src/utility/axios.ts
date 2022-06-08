import axios from "axios";
// Base URL for the API requests (the API key is added to the end of the URL)
const instance: any = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default instance;
