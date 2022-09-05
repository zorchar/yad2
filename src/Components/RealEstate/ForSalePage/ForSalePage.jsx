import React from "react";
import RealEstateColumn from "./RealEstateColumn/RealEstateColumn";
import SearchBlock from "./SearchBlock/SearchBlock";

export default function ForSalePage() {
  return (
    <div className="forsale-page">
      <div className="width-960">
        <SearchBlock />
        <RealEstateColumn />
      </div>
    </div>
  );
}
