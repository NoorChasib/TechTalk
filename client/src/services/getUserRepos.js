import axios from "axios";

const getUserRepos = (accessToken) => {
  return axios
    .get(`https://api.github.com/user/repos`, {
      headers: {
        Authorization: `Token ${accessToken}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};


export default getUserRepos;
