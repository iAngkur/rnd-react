import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

function RQSuperHeroeDetailPage() {
  const { id } = useParams();

  const getHeroDetail = async (heroId) => {
    try {
      const res = await axios.get(
        `http://localhost:4001/superheroes/${heroId}`
      );
      return res.status === 200 ? res.data : [];
    } catch (err) {
      console.log("No data found! " + (err as Error).message);
      return [];
    }
  };

  const { data, isPending } = useQuery({
    queryKey: ["hero-detail-by-id", id],
    queryFn: () => getHeroDetail(id),
    staleTime: 30000,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.id}</h1>
      <h2 className="font-bold">{data.name}</h2>
      <p className="text-red-500">{data.alterEgo}</p>
    </div>
  );
}

export default RQSuperHeroeDetailPage;
