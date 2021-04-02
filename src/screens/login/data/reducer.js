// import {
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
//   LOGOUT
// } from "./constants";
// import localStorageHandler from "../../../util/storage";
// const initialState = {
//   isAuthenticated: localStorageHandler.isAuthenticated(),
//   userInfo: {},
//   loginFailed: false,
//   loggingIn: false
// };
// export default function(state = initialState, action) {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//       {console.log(action)}
//       return {
//         ...state,
//         isAuthenticated: false,
//         loggingIn: true
//       };
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         isAuthenticated: true,
//         userInfo: action.response.data
//       };
//     case LOGIN_FAILURE:
//       return {
//         ...state,
//         isAuthenticated: false,
//         loggingIn: false,
//         loginFailed: true
//       };
//     case LOGOUT:
//       return { isAuthenticated: false };
//     default:
//       return state;
//   }
// }
import { HANDLE_TOKEN } from "./constants";

const initState = { token: "" };

const submitlogin = (state = initState, action) => {
  switch (action.type) {
    case HANDLE_TOKEN:
      console.log("switchcase");
      // console.log(action.token);
      return { token: action.token };

    default: {
      console.log("defaultcase");
      return state;
    }
  }
};
export default submitlogin;
