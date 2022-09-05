import React, { useState } from "react";
import { useContext } from "react";
import {
  toggleIsSectionValid,
  toggleShowSection,
} from "../../../../actions/newAdActions";
import { NewAdContext } from "../../../../context/NewAdContext";
import { newAsset } from "../../../../REST api/Assets";
import CheckboxAndLabel from "../../../Inputs/newAdInputs/CheckboxAndLabel/CheckboxAndLabel";
import LabelAndTextInput from "../LabelAndTextInput/LabelAndTextInput";

export default function ContactDetailsForm() {
  const { newAdDispatch, newAdState } = useContext(NewAdContext);

  const [isReadRules, setIsReadRules] = useState(false);
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

    if (isSixthSectionMandatoryInputsValid()) {
      newAdDispatch(toggleShowSection(6));
      newAdDispatch(toggleIsSectionValid(6, true));
      return newAsset(newAdState);
    }
  };

  const isSixthSectionMandatoryInputsValid = () => {
    if (
      !newAdState.nameOfContact?.isValid ||
      !newAdState.phoneNumber?.isValid ||
      !isReadRules
    ) {
      newAdDispatch(toggleIsSectionValid(6, false));
      return false;
    }
    return true;
  };

  return (
    newAdState["section" + 6]?.isShown && (
      <form id="contact-details-form" onSubmit={handleSubmit}>
        <div className="padding-50px-horizontal flex-column">
          רגע לפני שמפרסמים את המודעה, נבדוק שפרטי הקשר נכונים
          <LabelAndTextInput
            name="nameOfContact"
            label={"שם איש קשר*"}
            isInvalidityShown={
              isInvalidityShown ? getIsInvalid("nameOfContact") : false
            }
          />
          <LabelAndTextInput
            inputType={"number"}
            name="phoneNumber"
            label={"טלפון ראשי*"}
            isInvalidityShown={
              isInvalidityShown ? getIsInvalid("phoneNumber") : false
            }
          />
          <div className="horizontal-line"></div>
          <div className="flex-row-center">
            <div className="plus-sign-with-circle">+</div>
            <div className="color-orange">הוספת איש קשר נוסף</div>
          </div>
          <LabelAndTextInput name="email" label={'דוא"ל'} />
          <CheckboxAndLabel
            setIsReadRules={setIsReadRules}
            isReadRules={isReadRules}
            label={"קראתי ואישרתי את התקנון*"}
            isInvalidityShown={!isReadRules}
          />
          <CheckboxAndLabel
            label={
              "אשמח לקבל עדכונים, הצעות או טיפים לשיפור המודעה שלי לפרטי החשבון או לפרטי המודעה"
            }
          />
          <div className="flex-row-end">
            <button className="oval-border-button orange-button">
              המשך לבחירת מסלול
            </button>
          </div>
        </div>
      </form>
    )
  );
}
