import userActionTypes from "./action-types"

const initialState = {
    user: null
}

const userReducer = (state = initialState, action) => {
    if (action.type === userActionTypes.ADD_USER) {
        return {...state, user: action.payload}
    }
    return state
}

export default userReducer