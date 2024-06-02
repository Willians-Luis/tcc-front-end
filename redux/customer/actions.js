import customerActionTypes from "./action-types"

export const addCustomerAction = (payload) => ({
    type: customerActionTypes.ADD_CUSTOMER,
    payload,
})