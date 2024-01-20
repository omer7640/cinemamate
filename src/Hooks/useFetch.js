import React, { useState } from "react";
import { useEffect } from "react";

export function useFetch(apiPath, queryTerm = "") {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=19351edbfee491d873d6522cabece31e&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
}
