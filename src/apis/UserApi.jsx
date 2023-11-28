import axios from "axios";

const url = "http://3.38.224.139:8080";

export const LoginApi = (payload) => {
  return axios.post(`${url}/login`, {
    email: payload.email,
    password: payload.password,
  });
};

export const PhoneCertifyApi = (userInfo) => {
  return axios.post(`${url}/message/certify`, {
    phoneNumber: userInfo.phoneNumber,
  });
};

export const SignUpApi = (payload) => {
  return axios.post(`${url}/signup`, {
    nickname: payload.nickname,
    idWithProvider: payload.idWithProvider,
    memberName: payload.memberName,
    email: payload.email,
    password: payload.password,
    phoneNum: payload.phoneNumber,
    gender: payload.gender,
    job: payload.job,
    introduction: payload.introduction,
    locationEnabled: payload.locationEnabled,
    details: {
      relationType: payload.relationType,
      maritalStatus: payload.maritalStatus,
      hasChildren: payload.hasChildren,
      personality: {
        EI: payload.personalityEI,
        SN: payload.personalitySN,
        TF: payload.personalityTF,
        JP: payload.personalityJP,
      },
      hobby: payload.hobby,
    },
    birth: payload.birth,
    latitude: payload.latitude,
    longitude: payload.longitude,
  });
};
