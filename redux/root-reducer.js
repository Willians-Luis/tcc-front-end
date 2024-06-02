import { combineReducers } from "redux";
import customerReducer from "./customer/reducer";
import cartReducer from "./cart/reducer";
import userReducer from "./user/reducer";


const rootReducer = combineReducers({
    customerReducer,
    cartReducer,
    userReducer
})

export default rootReducer