import React, { useContext } from "react";
import { toggleShowSection } from "../../../../actions/newAdActions";
import { NewAdContext } from "../../../../context/NewAdContext";

export default function NewAdStepTopRow({ stepNumber, stepHeadline }) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);
  const isSectionValid = newAdState["section" + stepNumber]?.isSectionValid;

  const clickHandler = (e) => {
    if (e.currentTarget.className.includes("cursor-pointer"))
      newAdDispatch(toggleShowSection(stepNumber));
  };

  return (
    <div
      className={
        "new-ad-step__top-row" + (isSectionValid ? " cursor-pointer" : "")
      }
      onClick={clickHandler}
    >
      {isSectionValid ? (
        <div className="step-checkmark">
          <i className="fa-solid fa-check"></i>
        </div>
      ) : (
        <div className="step-number">{stepNumber}</div>
      )}
      <div className="step-headline">{stepHeadline}</div>
    </div>
  );
}
