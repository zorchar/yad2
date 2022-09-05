import { ACTIONS } from "../actions/newAdActions";

const newAdReducer = (newAdState, action) => {
  const validator = (inputValue, inputType) => {
    switch (inputType) {
      case "number":
        return !isNaN(inputValue) && inputValue.trim().length > 0;
      case "email":
        return inputValue.includes("@"); // use better validator
      default:
        return inputValue ? true : false;
    }
  };

  const newAdNewState = { ...newAdState };
  switch (action.type) {
    case ACTIONS.CHANGE_INPUT: {
      newAdNewState[action.payload.inputName] = {
        ...newAdNewState[action.payload.inputName],
        value: action.payload.inputValue,
        isValid: validator(action.payload.inputValue, action.payload.inputType),
      };
      return newAdNewState;
    }

    case ACTIONS.TOGGLE_INPUT: {
      newAdNewState[action.payload.inputName] = {
        ...newAdNewState[action.payload.inputName],
        value: !newAdNewState[action.payload.inputName]?.value,
      };
      return newAdNewState;
    }

    case ACTIONS.TOGGLE_SHOW_SECTION: {
      // newAdNewState["section" + action.payload.sectionIndex] = {
      //   ...newAdNewState["section" + action.payload.sectionIndex],
      //   isShown:
      //     !newAdNewState["section" + action.payload.sectionIndex]?.isShown,
      // };

      for (let i = 1; i < 8; i++) {
        newAdNewState["section" + i] = {
          ...newAdNewState["section" + i],
          isShown:
            i === action.payload.sectionIndex
              ? !newAdNewState["section" + action.payload.sectionIndex]?.isShown
              : false,
        };
      }
      return newAdNewState;
    }

    case ACTIONS.TOGGLE_IS_SECTION_VALID: {
      if (action.payload.isValid === false) {
        newAdNewState[
          "section" + action.payload.sectionIndex
        ].isSectionValid = false;
        return newAdNewState;
      }
      if (action.payload.isValid === true) {
        newAdNewState[
          "section" + action.payload.sectionIndex
        ].isSectionValid = true;
        return newAdNewState;
      }

      newAdNewState["section" + action.payload.sectionIndex] = {
        ...newAdNewState["section" + action.payload.sectionIndex],
        isSectionValid:
          !newAdNewState["section" + action.payload.sectionIndex]
            ?.isSectionValid,
      };
      return newAdNewState;
    }

    default:
      return newAdState;
  }
};

export default newAdReducer;
