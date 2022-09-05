import React from "react";
import AdvancedSearch from "./AdvancedSearch/AdvancedSearch";
import SearchBar from "./SearchBar/SearchBar";

export default function SearchBlock() {
  return (
    <div className="search-block">
      <SearchBar />
      <AdvancedSearch />
    </div>
  );
}
