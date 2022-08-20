import { ACTIONS } from '../actions/newAdActions'

const newAdReducer = (newAdState, action) => {
    const newAdNewState = { ...newAdState }
    switch (action.type) {
        case (ACTIONS.CHANGE_INPUT):
            newAdNewState[action.payload.inputName] = action.payload.inputValue
            return newAdNewState

        case (ACTIONS.TOGGLE_INPUT):
            newAdNewState[action.payload.inputName] = !newAdNewState[action.payload.inputName]
            return newAdNewState

        default:
            return newAdState
    }
}

export default newAdReducer