import React from "react";
import { useContext } from "react";
import { toggleInput } from "../../../../actions/newAdActions";
import { NewAdContext } from "../../../../context/NewAdContext";

export default function CheckboxAndLabel({
  name,
  label,
  isInvalidityShown,
  setIsReadRules,
  isReadRules,
}) {
  const { newAdDispatch } = useContext(NewAdContext);

  return (
    <div className="checkbox-and-label">
      <input
        style={isInvalidityShown ? { outline: "solid 1px #C00" } : null}
        onChange={name ? () => newAdDispatch(toggleInput(name)) : null}
        name={name}
        type="checkbox"
        className="checkbox"
        onClick={() => {
          setIsReadRules && setIsReadRules(!isReadRules);
        }}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
