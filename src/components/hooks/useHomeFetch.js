import { useState, useEffect } from "react";
import { POPULAR_BASE_POINT } from "../../config";

export const useHomeFetch = (searchTerm) => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      setState((prev) => ({
        ...prev,
        movies: [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (sessionStorage.homeState) {
      setState(JSON.parse(sessionStorage.homeState));
      setLoading(false);
    } else {
      fetchMovies(POPULAR_BASE_POINT);
    }
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      console.log("writing to sessionStorage");
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return [{ state, loading, error }, fetchMovies];
};
