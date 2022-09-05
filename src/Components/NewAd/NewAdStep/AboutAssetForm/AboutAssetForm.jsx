import React, { useContext, useState } from "react";
import {
  toggleIsSectionValid,
  toggleShowSection,
} from "../../../../actions/newAdActions";
import { NewAdContext } from "../../../../context/NewAdContext";
import { hideInputIfCondition } from "../../../../utils/hideInputIfCondition";
import LabelAndSelectInput from "../LabelAndSelectInput/LabelAndSelectInput";
import NewAdStepButtons from "../NewAdStepButtons/NewAdStepButtons";
import AssetDescription from "./AssetDescription/AssetDescription";
import NoneToThreePicker from "./NoneToThreePicker/NoneToThreePicker";
import PickAttributesBox from "./PickAttributesBox/PickAttributesBox";

export default function AboutAssetForm() {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);

  const shouldInputShow = () =>
    hideInputIfCondition(newAdState.typeOfProperty?.value, "מגרשים");

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

    if (isThirdSectionMandatoryInputsValid()) {
      newAdDispatch(toggleShowSection(3));
      newAdDispatch(toggleShowSection(4));
      newAdDispatch(toggleIsSectionValid(3, true));
    }
  };

  const isThirdSectionMandatoryInputsValid = () => {
    if (
      newAdState.typeOfProperty?.value !== "מגרשים" &&
      !newAdState.numberOfRooms?.isValid
    ) {
      newAdDispatch(toggleIsSectionValid(3, false));
      return false;
    }
    return true;
  };

  const showFormData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  return (
    newAdState["section" + 3]?.isShown && (
      <div className="padding-50px-horizontal flex-column">
        <form id="about-asset-form" onSubmit={handleSubmit}>
          {shouldInputShow() && (
            <>
              <LabelAndSelectInput
                name="numberOfRooms"
                label="מספר חדרים*"
                isInvalidityShown={
                  isInvalidityShown ? getIsInvalid("numberOfRooms") : false
                }
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </LabelAndSelectInput>

              <NoneToThreePicker name={"numberOfParkingPlaces"} label="חניה" />

              <NoneToThreePicker name={"numberOfPorches"} label="מרפסת" />
            </>
          )}
          <PickAttributesBox shouldInputShow={shouldInputShow} />

          <AssetDescription />

          <NewAdStepButtons />
        </form>
      </div>
    )
  );
}
