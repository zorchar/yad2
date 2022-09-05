import React from "react";
import ApartmentPropertiesCheckboxes from "./ApartmentPropertiesCheckboxes/ApartmentPropertiesCheckboxes";
import ApartmentPropertiesSecondRow from "./ApartmentPropertiesSecondRow/ApartmentPropertiesSecondRow";

export default function AdvancedSearch() {
  return (
    <div className="advanced-search">
      מאפייני דירה
      <ApartmentPropertiesCheckboxes />
      <ApartmentPropertiesSecondRow />
    </div>
  );
}
