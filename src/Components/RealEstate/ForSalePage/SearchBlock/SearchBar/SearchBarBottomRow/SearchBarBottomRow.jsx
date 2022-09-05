import React from "react";
import SearchBlockInputAndLabel from "../../../../../Inputs/searchInputs/SearchBlockInputAndLabel/SearchBlockInputAndLabel";
import ExpandSearchButton from "./ExpandSearchButton/ExpandSearchButton";
import SearchButton from "./SearchButton/SearchButton";

export default function SearchBarBottomRow() {
  return (
    <form className="search-bar-bottom-row">
      <SearchBlockInputAndLabel
        id={"search-area"}
        label={"חפשו אזור, עיר, שכונה או רחוב"}
        placeholder={"לדוגמה: פלורנטין"}
      />
      <SearchBlockInputAndLabel
        id={"type-of-asset"}
        label={"סוג נכס"}
        placeholder={"בחרו סוגי נכסים"}
      />
      <SearchBlockInputAndLabel
        id={"number-of-rooms"}
        label={"חדרים"}
        placeholder={"חדרים"}
      />
      <SearchBlockInputAndLabel
        id={"price-range-low"}
        label={"מחיר"}
        placeholder={"מ-"}
      />
      <SearchBlockInputAndLabel id={"price-range-high"} placeholder={"עד"} />
      <ExpandSearchButton />
      <SearchButton />
    </form>
  );
}
