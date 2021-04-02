import axios from "axios";
import { BASE_URL } from "../../config/baseUrl";
import localStorageHandler from "../storage/";

const API = () => {
  const defaultOptions = {
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json"
    }
  };
  const instance = axios.create(defaultOptions);
  instance.interceptors.request.use(
    config => onRequest(config),
    error => onRequestError(error)
  );
  instance.interceptors.response.use(
    response => onResponse(response),
    error => onResponseError(error)
  );
  return instance;
};
export default API();

//Request Interceptors
function onRequest(config) {
  const token = localStorageHandler.getToken();
  if (
    config.url.indexOf("login") < 0 
  
  )
    config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
}

//Response Interceptors
function onResponse(response) {
  return response;
}

function onRequestError(error) {
  return error;
}
function onResponseError(error) {
  if (error.response.data.status == 401) {
    localStorageHandler.removeSession();
    if (window.location.pathname != "/login") {
      window.location.reload("/login");
    }
  }
  if (error.response.data.status == 500) {
    alert("Service Unavailable");
  }
  return error;
}
