import React, { useState } from "react";
import SearchResultLeftSide from "./SearchResultLeftSide/SearchResultLeftSide";
import SearchResultMiddle from "./SearchResultMiddle/SearchResultMiddle";
import SearchResultRightSide from "./SearchResultRightSide/SearchResultRightSide";

export default function SearchResult({
  src,
  alt,
  address,
  typeOfProperty,
  neighborhood,
  settlement,
  numberOfRooms,
  floor,
  builtSquareMeters,
  price,
}) {
  const [isHover, setIsHover] = useState(false);

  const handleOnMouseEnter = (e) => {
    setIsHover(true);
  };

  const handleOnMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="search-result"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <SearchResultRightSide
        address={address}
        typeOfProperty={typeOfProperty}
        neighborhood={neighborhood}
        settlement={settlement}
        src={src}
        alt={alt}
      />
      <SearchResultMiddle
        numberOfRooms={numberOfRooms}
        floor={floor}
        builtSquareMeters={builtSquareMeters}
      />
      <SearchResultLeftSide price={price} isHover={isHover} />
    </div>
  );
}
