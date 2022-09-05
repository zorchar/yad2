import React, { useContext } from "react";
import { useState } from "react";
import {
  toggleIsSectionValid,
  toggleShowSection,
} from "../../../../actions/newAdActions";
import { NewAdContext } from "../../../../context/NewAdContext";
import { hideInputIfCondition } from "../../../../utils/hideInputIfCondition";
import NewAdStepButtons from "../NewAdStepButtons/NewAdStepButtons";
import InputAddressNumber from "./InputAddressNumber/InputAddressNumber";
import InputFloors from "./InputFloors/InputFloors";
import InputGetUpdates from "./InputGetUpdates/InputGetUpdates";
import InputNeighborhood from "./InputNeighborhood/InputNeighborhood";
import InputRegionOfSale from "./InputRegionOfSale/InputRegionOfSale";
import InputSettlement from "./InputSettlement/InputSettlement";
import InputStateOfProperty from "./InputStateOfProperty/InputStateOfProperty";
import InputStreet from "./InputStreet/InputStreet";
import InputTypeOfProperty from "./InputTypeOfProperty/InputTypeOfProperty";

export default function AssetAddressForm() {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);

  const [isInvalidityShown, setIsInvalidityShown] = useState(false);

  const getIsInvalid = (inputName) => {
    if (newAdState[inputName]?.isValid) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsInvalidityShown(true);

    for (const input in newAdState) {
      if (newAdState[input].isValid === false) return;
    }

    if (isSecondSectionMandatoryInputsValid()) {
      newAdDispatch(toggleShowSection(2));
      newAdDispatch(toggleShowSection(3));
      newAdDispatch(toggleIsSectionValid(2, true));
    }
  };

  const isSecondSectionMandatoryInputsValid = () => {
    if (
      !newAdState.typeOfProperty?.isValid ||
      (shouldInputStateOfPropertyShow() &&
        !newAdState.stateOfProperty?.isValid) ||
      !newAdState.settlement?.isValid ||
      !newAdState.street?.isValid ||
      !newAdState.addressNumber?.isValid ||
      (shouldInputFloorsShow() && !newAdState.floor?.isValid) ||
      (shouldInputFloorsShow() && !newAdState.floorsInBuilding?.isValid)
    ) {
      newAdDispatch(toggleIsSectionValid(2, false));
      return false;
    }
    return true;
  };

  const shouldInputStateOfPropertyShow = () => {
    return hideInputIfCondition(newAdState.typeOfProperty?.value, "מגרשים");
  };

  const shouldInputFloorsShow = () => {
    switch (newAdState.typeOfProperty?.value) {
      case undefined:
        return true;
      case "דירה":
        return true;
      case "דירת גן":
        return true;
      case "גג/פנטהאוז":
        return true;
      case "דופלקס":
        return true;
      case "דירת נופש":
        return true;
      case "מרתף/פרטר":
        return true;
      case "טריפלקס":
        return true;
      case "יחידת דיור":
        return true;
      case "דיור מוגן":
        return true;
      case "בניין מגורים":
        return true;
      case "סטודיו/לופט":
        return true;
      case "כללי":
        return true;

      default:
        return false;
    }
  };

  return (
    newAdState["section" + 2]?.isShown && (
      <div className="padding-50px-horizontal flex-column">
        סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב
        <form id="asset-address-form" onSubmit={handleSubmit}>
          <InputTypeOfProperty
            isInvalidityShown={
              isInvalidityShown ? getIsInvalid("typeOfProperty") : false
            }
          />

          {shouldInputStateOfPropertyShow() && (
            <InputStateOfProperty
              isInvalidityShown={
                isInvalidityShown ? getIsInvalid("stateOfProperty") : false
              }
            />
          )}

          <InputSettlement
            isInvalidityShown={
              isInvalidityShown ? getIsInvalid("settlement") : false
            }
          />

          <InputStreet
            isInvalidityShown={
              isInvalidityShown ? getIsInvalid("street") : false
            }
            disabled={!newAdState.settlement?.isValid}
          />

          <InputAddressNumber
            isInvalidityShown={
              isInvalidityShown ? getIsInvalid("addressNumber") : false
            }
            disabled={!newAdState.street?.isValid}
          />

          {shouldInputFloorsShow() && (
            <InputFloors
              disabled={!newAdState.typeOfProperty?.value}
              isInvalidityShown={isInvalidityShown}
              getIsInvalid={getIsInvalid}
              typeOfPropertyValue={newAdState.typeOfProperty?.value}
            />
          )}

          <InputNeighborhood
            disabled={true}
            isInvalidityShown={isInvalidityShown}
          />

          <InputRegionOfSale
            disabled={true}
            isInvalidityShown={isInvalidityShown}
          />

          <InputGetUpdates />

          <NewAdStepButtons />
        </form>
      </div>
    )
  );
}
