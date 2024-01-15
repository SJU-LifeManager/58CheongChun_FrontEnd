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

export const FriendLikeApi = (id, token) => {
  return axios.post(
    `${url}/like`,
    { id: id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const ApplyFriendApi = (id, token) => {
  return axios.post(
    `${url}/request-friend`,
    {
      id: id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const InsideDistanceFriendsApi = (distance, token) => {
  return axios.get(`${url}/friends/distance?distance=${distance}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
