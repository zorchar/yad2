import React from "react";

export default function SearchResultMiddle({
  numberOfRooms,
  floor,
  builtSquareMeters,
}) {
  return (
    <div className="search-result__middle">
      <div className="flex-column">
        {numberOfRooms ? numberOfRooms : "-"}
        <div>חדרים</div>
      </div>
      <div className="flex-column">
        {floor ? floor : "-"}
        <div>קומה</div>
      </div>
      <div className="flex-column">
        {builtSquareMeters ? builtSquareMeters : "-"}
        <div>מ"ר</div>
      </div>
    </div>
  );
}
