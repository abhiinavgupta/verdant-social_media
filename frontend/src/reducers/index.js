import { userReducer } from "./userReducer";

const { useReducer } = require("react");
const { combineReducers } = require("redux");




const rootReducer = combineReducers({
        user: userReducer,
});
export default rootReducer