const setBaseUrl = base_url => {
  localStorage.setItem('base_url',base_url);
  // localStorage.setItem("loginDetails", JSON.stringify(response));
  console.log(localStorage.getItem("base_url"));
};
const getBaseUrl = () => {
  return 
    localStorage.getItem("base_url")
  
}; 
const setLoginResponse = response => {
    localStorage.setItem("basicDetails", JSON.stringify(response));
    console.log(localStorage.getItem("basicDetails"));
  };
  const getLoginResponse = () => {
    return localStorage["basicDetails"]
      ? JSON.parse(localStorage.getItem("basicDetails"))
      : null;
  };
  const isAuthenticated = () => {
    return getLoginResponse() && getLoginResponse().token ? true : false;
  };
  const getToken = () => {
    return isAuthenticated() ? getLoginResponse().token : null;
  };
  
  const getBasicDetails = () => {
    return getLoginResponse() == null ? null : getLoginResponse().basicDetails;
  };
  
  const getUserDetails = () => {
    return getBasicDetails() == null ? null : getBasicDetails().userDetails;
  };
  
//   const getLocalBody = () => {
//     return getBasicDetails() == null ? null : getBasicDetails().localBody;
//   };
//   const getRole = () => {
//     return getBasicDetails() == null ? null : getBasicDetails().role;
//   };
  
 
  const removeSession = () => {
    localStorage.removeItem("base_url");
    localStorage.clear();
  };
  const LocalStorageHandler = {
    setBaseUrl,
    getBaseUrl,
    setLoginResponse,
    getLoginResponse,
    getToken,
    getUserDetails,
    // getLocalBody,
    // getRole,
  
    removeSession,
    isAuthenticated
  };
  
  export default LocalStorageHandler;
  