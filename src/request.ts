const API_KEY: string = "7fd727d5175ac112f4c3b1ae6d2ccbc9";

const requests: { [key: string]: any } = {
  fetchNetflix: `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_watch_providers=8&watch_region=CA`,
  fetchCrave: `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_watch_providers=230&watch_region=CA`,
  fetchDisney: `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_watch_providers=337&watch_region=CA`,
  fetchApple: `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_watch_providers=350&watch_region=CA`,
};

export default requests;
