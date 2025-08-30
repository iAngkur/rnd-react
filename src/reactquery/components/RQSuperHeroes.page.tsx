import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

function RQSuperHeroesPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const limit = 5;

  const getHeroes = async () => {
    try {
      const res = await axios.get("http://localhost:4001/superheroes", {
        params: {
          _start: (pageNumber - 1) * limit,
          _end: pageNumber * limit,
        },
      });
      const heroes = res.data;
      const totalCount = 20;

      return { heroes, totalCount };
    } catch (err) {
      console.log(err);
    }
  };

  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["super-heroes", pageNumber, limit],
    queryFn: getHeroes,
    // gcTime: ,
    staleTime: 30000,
    // enabled: false,
  });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const totalPages = Math.ceil(data!.totalCount / limit);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="my-4 text-center font-bold">RQ Super Heroes Page</h2>

      {data?.heroes.map(({ id, name }) => (
        <NavLink
          to={`/rq-super-heroes/${id}`}
          key={id}
          className="block border border-amber-400 p-1.5 mb-4"
        >
          {id} - {name}
        </NavLink>
      ))}
      <div className="flex justify-between">
        <button
          className="cursor-pointer"
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber((prev) => prev - 1)}
        >
          Prev
        </button>
        <span>
          Page {pageNumber} of {totalPages}
        </span>
        <button
          className="cursor-pointer"
          disabled={pageNumber >= totalPages}
          onClick={() => setPageNumber((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default RQSuperHeroesPage;
