import userActionTypes from "./action-types"

export const addUserAction = (payload) => ({
    type: userActionTypes.ADD_USER,
    payload,
})