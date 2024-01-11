import axios from "axios";

const url = "http://3.38.224.139:8080";

export const TodayFriendsApi = (token) => {
  return axios.get(`${url}/friends`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const FriendsDetailApi = (nickname, token) => {
  return axios.get(`${url}/friends/details?nickname=${nickname}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
