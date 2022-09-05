import React from "react";
import { hideInputIfCondition } from "../../../../../utils/hideInputIfCondition";
import LabelAndTextInput from "../../LabelAndTextInput/LabelAndTextInput";
import CheckboxAndLabel from "../../../../Inputs/newAdInputs/CheckboxAndLabel/CheckboxAndLabel";

export default function InputFloors({
  typeOfPropertyValue,
  isInvalidityShown,
  disabled,
  getIsInvalid,
}) {
  const shouldOnStiltsShow = () =>
    hideInputIfCondition(
      typeOfPropertyValue,
      "דירת גן",
      "מרתף/פרטר",
      "דיור מוגן"
    );
  const shouldFloorNumberShow = () =>
    hideInputIfCondition(typeOfPropertyValue, "בניין מגורים");

  return (
    <div className="flex-row-center">
      {shouldFloorNumberShow() && (
        <div className="flex-column">
          <LabelAndTextInput
            disabled={disabled}
            isInvalidityShown={
              isInvalidityShown ? getIsInvalid("floor") : false
            }
            inputType="number"
            name="floor"
            placeholder="הכנסת מספר קומה"
            label="קומה*"
          />
          {!disabled && isInvalidityShown && getIsInvalid("floor") && (
            <span>שדה חובה</span>
          )}
        </div>
      )}

      <div className="flex-column">
        <LabelAndTextInput
          disabled={disabled}
          isInvalidityShown={
            isInvalidityShown ? getIsInvalid("floorsInBuilding") : false
          }
          inputType="number"
          name="floorsInBuilding"
          placeholder='הכנסת סה"כ קומות'
          label='סה"כ קומות בבניין*'
        />
        {!disabled && isInvalidityShown && getIsInvalid("floorsInBuilding") && (
          <span>שדה חובה</span>
        )}
      </div>

      {shouldOnStiltsShow() && (
        <CheckboxAndLabel name="isOnStilts" label="על עמודים" />
      )}
    </div>
  );
}
