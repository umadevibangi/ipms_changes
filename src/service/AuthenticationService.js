import APIRequest from "../util/api/APIRequest";

const login = userDeatails => {
  return APIRequest({
    url: "auth/login",
    method: "POST",
    
    data: userDeatails
    
  } );
 
};
const AuthenticationService = {
  login,
};
export default AuthenticationService;
