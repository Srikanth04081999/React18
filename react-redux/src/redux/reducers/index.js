import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducer = combineReducers({
    allproduct : productReducer,
})

export default reducer;