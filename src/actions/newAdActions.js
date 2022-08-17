export const ACTIONS = {
    CHANGE_INPUT: 'CHANGE_INPUT',
    TOGGLE_INPUT: 'TOGGLE_INPUT'
}

export const changeInput = (inputName, inputValue) => ({
    type: ACTIONS.CHANGE_INPUT,
    payload: {
        inputName,
        inputValue
    }
})
export const toggleInput = (inputName) => ({
    type: ACTIONS.TOGGLE_INPUT,
    payload: { inputName }
})