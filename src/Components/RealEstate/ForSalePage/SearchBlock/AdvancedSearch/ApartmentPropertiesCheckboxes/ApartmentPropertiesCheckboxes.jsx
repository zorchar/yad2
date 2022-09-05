import React from "react";
import CheckboxAndLabel from "../../../../../Inputs/newAdInputs/CheckboxAndLabel/CheckboxAndLabel";

export default function ApartmentPropertiesCheckboxes() {
  return (
    <div className="checkboxes-container">
      {<CheckboxAndLabel name={"numberOfParkingPlaces"} label={"חניה"} />}
      {<CheckboxAndLabel name={"hasElevator"} label={"מעלית"} />}
      {<CheckboxAndLabel name={"hasAC"} label={"מיזוג"} />}
      {<CheckboxAndLabel name={"numberOfPorches"} label={"מרפסת"} />}
      {<CheckboxAndLabel name={"hasMamad"} label={'ממ"ד'} />}
      {<CheckboxAndLabel name={"hasBars"} label={"סורגים"} />}
      {<CheckboxAndLabel name={"hasWarehouse"} label={"מחסן"} />}
      {
        <CheckboxAndLabel
          name={"hasDisabledAccessibility"}
          label={"גישה לנכים"}
        />
      }
      {<CheckboxAndLabel name={"isRenovated"} label={"משופצת"} />}
      {<CheckboxAndLabel name={"hasFurniture"} label={"מרוהטת"} />}
      {<CheckboxAndLabel name={""} label={"בבלעדיות"} />}
    </div>
  );
}
