const API_KEY = import.meta.env.VITE_APP_TMDB_API;

// https://api.themoviedb.org/3/movie/550?api_key=

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrerMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
