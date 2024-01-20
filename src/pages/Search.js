import React from "react";
import { Card } from "../components/Card";
import { useFetch } from "../Hooks/useFetch";
import { useSearchParams } from "react-router-dom";
export function Search({ apiPath }) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  return (
    <>
      <main>
        <section className="pt-7">
          <p className="text-3xl text-gray-700 dark:text-white">
            {movies.length === 0
              ? `No result found for ${queryTerm}`
              : `result for ${queryTerm}`}
          </p>
          <section className="max-w-7xl mx-auto py-7 card-section">
            <div className="flex justify-start flex-wrap card-main">
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
