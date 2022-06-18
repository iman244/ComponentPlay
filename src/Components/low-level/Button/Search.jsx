import React from "react";

import "./Search.css";

function Search({ className }) {
  return (
    <div className={`search ${className}`}>
      <i class="fa-solid fa-magnifying-glass"></i>
      <input placeholder="Search ..." />
    </div>
  );
}

export default Search;
