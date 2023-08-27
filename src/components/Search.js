import React from "react";

export default function Search({ setSearchText }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Notes..."
        onChange={(e) => setSearchText(e.target.value)}
        className="inputSearch"
      />
    </div>
  );
}
