import React, { useContext, useState } from "react";
import {
  changeInput,
  toggleIsSectionValid,
  toggleShowSection,
} from "../../../../actions/newAdActions";
import { NewAdContext } from "../../../../context/NewAdContext";
import CheckboxAndLabel from "../../../Inputs/newAdInputs/CheckboxAndLabel/CheckboxAndLabel";
import LabelAndTextInput from "../LabelAndTextInput/LabelAndTextInput";
import NewAdStepButtons from "../NewAdStepButtons/NewAdStepButtons";

export default function PaymentsAndMoreForm() {
  const { newAdDispatch, newAdState } = useContext(NewAdContext);

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

    if (isFourthSectionMandatoryInputsValid()) {
      newAdDispatch(toggleShowSection(4));
      newAdDispatch(toggleShowSection(5));
      newAdDispatch(toggleIsSectionValid(4, true));
    }
  };
  const isFourthSectionMandatoryInputsValid = () => {
    if (!newAdState.overallSquareMeters?.isValid) {
      newAdDispatch(toggleIsSectionValid(4, false));
      return false;
    }
    return true;
  };

  return (
    newAdState["section" + 4]?.isShown && (
      <div className="padding-50px-horizontal flex-column">
        <form id="payments-and-more-form" onSubmit={handleSubmit}>
          <LabelAndTextInput
            name={"builtSquareMeters"}
            label='מ"ר בנוי'
            placeholder='כמה מ"ר יש בנכס'
          />

          <LabelAndTextInput
            name={"overallSquareMeters"}
            label='גודל במ"ר סך הכל*'
            inputType="number"
            isInvalidityShown={
              isInvalidityShown ? getIsInvalid("overallSquareMeters") : false
            }
          />

          <LabelAndTextInput
            name={"price"}
            label="מחיר"
            placeholder="סכום מינימלי 100,000"
          />

          <div className="flex-row">
            <div>
              <label htmlFor="entryDate">תאריך כניסה</label>
              <div className="input-wrapper">
                <input
                  name="entryDate"
                  type="date"
                  onChange={(e) =>
                    newAdDispatch(changeInput("entryDate", e.target.value))
                  }
                />
              </div>
            </div>
            <CheckboxAndLabel name="isImmediate" label="מיידי" />
            <CheckboxAndLabel name="isFlexible" label="גמיש" />
          </div>

          <NewAdStepButtons />
        </form>
      </div>
    )
  );
}
