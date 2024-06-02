import customerActionTypes from "./action-types"

const initialState = {
    customer: null
}

const customerReducer = (state = initialState, action) => {
    if (action.type === customerActionTypes.ADD_CUSTOMER) {
        return {...state, customer: action.payload}
    }
    return state
}

export default customerReducer