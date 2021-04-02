// import {
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
//   LOGOUT
// } from "./constants";

// import authenticationService from "../../../service/AuthenticationService";
// import localStorageHandler from "../../../util/storage";
// import { Redirect } from "react-router-dom";

// export const doLogin = userCredentials => {
//   return dispatch => {
//     // dispatch(loadingActions.isloading());
//     localStorageHandler.removeSession();
//     dispatch(request(userCredentials));

//     authenticationService.login(userCredentials).then(
//       response => {
//         {console.log(response)}
//         if (response.data) {
//           dispatch(success(response));
//           // dispatch(loadingActions.loadingComplete());
//         } else {
//           dispatch(failure(response));
//           // dispatch(loadingActions.loadingComplete());
//         }
//       },
//       error => {
//         dispatch(failure(error));
//         // dispatch(loadingActions.loadingComplete());
//       }
//     );
//   };

//   function request(userCredentials) {
//     return { type: LOGIN_REQUEST, userCredentials };
//   }
//   function success(response) {
//     return { type: LOGIN_SUCCESS, response };
//   }
//   function failure(error) {
//     return { type: LOGIN_FAILURE, error };
//   }
// };

// export const doLogout = () => {

//   return dispatch => {
//     authenticationService.logout().then(response => {
//       localStorageHandler.removeSession();
//       dispatch(lgoutAction());
//     });
//   };  

//   function lgoutAction() {
//     return { type: LOGOUT };
//   }
// };
import { HANDLE_TOKEN } from "./constants";

export function handleToken(token) {
  return { type: HANDLE_TOKEN, token: token };
}

