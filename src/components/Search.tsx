import * as React from "react";
import { Component } from "react";
import MyContext from "../utils/MyContext";
function Search({ num }: { num: number }) {
  React.useEffect(() => {
    console.log(num);
  }, [num]);
  return (
    <>
      <div className="h-full w-[50%] flex items-center">
        <button
          className={`py-2 px-3 mr-5 ${
            num === 0
              ? "bg-blue-500"
              : num === 1
              ? "bg-yellow-500"
              : num === 2 && "bg-red-500"
          } hover:shadow-lg ${
            num === 0
              ? "hover:bg-blue-400"
              : num === 1
              ? "hover:bg-yellow-400"
              : num === 2 && "hover:bg-red-400"
          } transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold rounded-full`}
        >
          高度な検索
        </button>
        <input
          type="text"
          className="w-[50%] h-[60%] px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search..."
        />{" "}
      </div>
    </>
  );
}

export default Search;
