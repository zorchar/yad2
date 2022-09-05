import React from "react";

export default function SearchResultLeftSide({
  price = "לא צוין מחיר",
  isHover,
}) {
  return (
    <div className="search-result__left-side">
      <div className="flex-column">
        <div className="open-in-new-tab">
          {isHover && "פתיחה בטאב חדש "}
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
        <div className="weight-500">
          {price ? "\u20AA" + price : "לא צוין מחיר"}
        </div>
        {isHover && <div className="click-for-details orange">לחצו לפרטים</div>}
        {!isHover && <div className="updated-today">עודכן היום</div>}
      </div>
    </div>
  );
}
