import { FilteredMovieResult } from "./filteredMovieResult";

export interface FilteredMoviesResponse {
  page: number,
  results: FilteredMovieResult[],
  total_pages: number,
  total_results: number
}
