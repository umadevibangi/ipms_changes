import loginReducer from "../screens/login/data/reducer";
  import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import travelFormReducer from "../Screens/RequestPage/data/reducer";
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    loginReducer,
    // travelFormReducer,
  });
