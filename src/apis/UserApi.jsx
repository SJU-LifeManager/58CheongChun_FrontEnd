import axios from "axios";

const url = "http://localhost:8080";

export const LoginApi = (payload) => {
  return axios.post(`${url}/login`, {
    email: payload.email,
    password: payload.password,
  });
};

export const PhoneCertifyApi = (payload) => {
  return axios.post(`${url}/message/certify`, {
    phoneNumber: payload.phone,
  });
};
