import React from "react";

const quote1 = {
  text: "One of my most productive days was throwing away 1000 lines of code.",
  author: "Ken Thompson",
  bio: "Designer of Unix Operating System",
};

function QuoteBox() {
  return (
    <div className="flex flex-col my-4 gap-4">
      <div className="w-sm mx-auto flex flex-col rounded-xl shadow-md overflow-hidden">
        <div className="bg-cyan-700 p-4 text-cyan-100">{quote1.text}</div>
        <div className="bg-stone-100 p-4 flex flex-col justify-center items-center gap-1 border border-stone-300">
          <h1 className="text-3xl font-bold text-cyan-700">{quote1.author}</h1>
          <p className="text-md font-semibold text-stone-400">{quote1.bio}</p>
        </div>
      </div>

      <div className="w-md mx-auto flex flex-row justify-center">
        <div className="bg-blue-600 flex-1 p-4 flex flex-col justify-center items-center rounded-l-lg">
          <h1 className="text-2xl font-bold text-white">{quote1.author}</h1>
          <p className="text-sm font-semibold text-blue-300">{quote1.bio}</p>
        </div>
        <div className="flex-2 bg-stone-100 p-4 text-stone-600 border border-stone-300 flex items-center rounded-r-full">
          {quote1.text}
        </div>
      </div>

      <div className="w-md mx-auto flex flex-col">
        <div className="bg-rose-400 p-4 text-white rounded-md rounded-bl-none border-t-2 border-x-2 border-rose-400">
          {quote1.text}
        </div>
        <div className="self-start bg-rose-100 p-4 flex flex-col justify-center rounded-b-md border-b-2 border-x-2 border-rose-400">
          <h1 className="text-lg font-bold text-red-900">{quote1.author}</h1>
          <p className="text-sm font-md text-red-400">{quote1.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
