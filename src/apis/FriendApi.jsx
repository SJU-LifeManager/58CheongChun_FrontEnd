import axios from "axios";

const url = "http://3.38.224.139:8080";

export const TodayFriendsApi = () => {
  return (
    axios.get(`${url}/friends`),
    {
      headers: {
        Authorization: `Bearer Debug`,
      },
    }
  );
};
