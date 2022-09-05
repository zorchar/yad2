import { ACTIONS } from "../actions/searchActions";

const searchReducer = (searchState, action) => {
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

  const newSearchState = { ...searchState };
  switch (action.type) {
    case ACTIONS.CHANGE_INPUT: {
      newSearchState[action.payload.inputName] = {
        ...newSearchState[action.payload.inputName],
        value: action.payload.inputValue,
        isValid: validator(action.payload.inputValue, action.payload.inputType),
      };
      return newSearchState;
    }

    case ACTIONS.TOGGLE_INPUT: {
      newSearchState[action.payload.inputName] = {
        ...newSearchState[action.payload.inputName],
        value: !newSearchState[action.payload.inputName]?.value,
      };
      return newSearchState;
    }

    default:
      return searchState;
  }
};

export default searchReducer;
