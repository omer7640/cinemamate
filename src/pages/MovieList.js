import act, { useEffect, useState } from "react";

import { Card } from "../components/Card";
import { useFetch } from "../Hooks/useFetch";

export function MovieList({ apiPath }) {
  // const [movies, setMovies] = useState();
  const { data: movies } = useFetch(apiPath);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 ">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
