import React, { useEffect, useState } from "react";
import axios from "axios";

function SuperHeroesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/superheroes")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("API Error:", err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading && data.length === 0) {
    return <div>No Data</div>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map(({ name }) => (
        <div key={name}>{name}</div>
      ))}
    </>
  );
}

export default SuperHeroesPage;
