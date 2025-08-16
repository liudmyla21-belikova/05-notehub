import axios from "axios";
import type { Movie } from "../types/movie";
const myTokken = import.meta.env.VITE_TMDB_TOKEN;
interface MoviesHttpResponse {
  results: Movie[];
  total_pages: number;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${myTokken}`,
  },
};

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MoviesHttpResponse> => {
  const response = await axios.get<MoviesHttpResponse>(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
    options
  );
  return response.data;
};