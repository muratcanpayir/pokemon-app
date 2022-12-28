import React from "react";

type TProps = {
  setSearch?: any;
};
export const Search = ({ setSearch }: TProps) => {
  return (
    <form className="flex justify-center p-5">
      <input
        type="text"
        placeholder="Ara"
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
        Ara
      </button>
    </form>
  );
};
