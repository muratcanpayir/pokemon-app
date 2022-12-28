import React from "react";

type TProps = {
  setSearch?: any;
};
export const Search = ({ setSearch }: TProps) => {
  return (
    <form className="flex justify-center p-5 bg-slate-800">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered input-primary w-full max-w-xs"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="ml-5"
      >
        Search
      </button>
    </form>
  );
};
