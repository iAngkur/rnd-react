import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RQSuperHeroDetailPage from "./components/RQSuperHeroeDetailPage";

const queryClient = new QueryClient();

function ReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <nav>
          <ul className="flex bg-[#FFEBCD] mt-0 p-4 shadow-md">
            <li className="mr-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-4">
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li className="mr-4">
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route
            path="/rq-super-heroes/:id"
            element={<RQSuperHeroDetailPage />}
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>

      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryClientProvider>
  );
}

export default ReactQuery;
