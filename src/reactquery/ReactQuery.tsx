import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import SuperHeroesPage from "./components/SuperHeroes.page";

function ReactQuery() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="flex bg-[#FFEBCD] mt-0 p-4 shadow-md">
            <li className="mr-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-4">
              <a href="/super-heroes">Traditional Super Heroes</a>
            </li>
            <li className="mr-4">
              <a href="/rq-super-heroes">RQ Super Heroes</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default ReactQuery;
