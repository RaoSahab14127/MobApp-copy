import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.xsrfCookieName = "XCSRF-TOKEN"

const axiosRequest = axios.create({
    baseURL: 'https://api.cloudinstaller.app/v1/',
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0"
    },
  });

  function apiLoginRequest(payload){
    return axiosRequest.post("login/",payload.body)
  }
export const AuthApiServices = {
    apiLoginRequest
}