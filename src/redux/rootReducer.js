import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer"
import iceCreamReducer from "./iceCreams/iceCreamReducer"
import userReducer from "./user/userReducer";


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
});

export default rootReducer