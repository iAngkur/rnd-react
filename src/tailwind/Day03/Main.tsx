import { SearchOutlined } from "@ant-design/icons";
import React from "react";

function Main() {
  return (
    <main className="flex-1 bg-orange-100 flex justify-center items-center">
      <div className="max-w-lg w-full mx-auto px-4 flex flex-col items-center gap-6">
        <h1 className="mb-8 text-5xl font-bold text-orange-600">Foogle</h1>
        <div className="w-full bg-orange-200 rounded-full px-4 py-2 border-1 border-orange-300 flex items-center gap-2">
          <div className="text-orange-500 flex justify-center items-center">
            <SearchOutlined />
          </div>
          <label htmlFor="search" className="sr-only">
            Search query
          </label>
          <input
            type="text"
            id="search"
            name="search"
            autoFocus
            className="outline-none w-full text-sm text-gray-800"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-purple-200 px-4 py-1 text-purple-500 font-semibold text-sm rounded-md hover:bg-purple-300 border-1 border-purple-400">
            Foogle Search
          </button>
          <button className="bg-purple-200 px-4 py-1 text-purple-500 font-semibold text-sm rounded-md hover:bg-purple-300 border-1 border-purple-400">
            Image Search
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
