import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { changeInput } from "../../../../actions/newAdActions";
import { NewAdContext } from "../../../../context/NewAdContext";

export default function LabelAndTextInput({
  placeholder,
  name,
  label,
  disabled,
  inputType,
  isInvalidityShown,
}) {
  const { newAdState, newAdDispatch } = useContext(NewAdContext);

  const inputRef = useRef(null);

  return (
    <>
      <label style={disabled ? { color: "#ccc" } : null} htmlFor={name}>
        {label}
      </label>
      <div className="input-wrapper ">
        <input
          style={
            (isInvalidityShown && !disabled && { border: "solid 1px #C00" }) ||
            null
          }
          disabled={disabled}
          value={newAdState[name]?.value || ""}
          ref={inputRef}
          onChange={(e) =>
            newAdDispatch(changeInput(name, e.target.value, inputType))
          }
          name={name}
          type="text"
          placeholder={placeholder}
        />
        {newAdState[name] && (
          <i
            className="fa-solid fa-xmark"
            onClick={() => {
              newAdDispatch(changeInput(name, ""));
              inputRef.current.value = "";
            }}
          ></i>
        )}
      </div>
    </>
  );
}
