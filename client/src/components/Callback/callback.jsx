import axios from "axios";

const Callback = async() => {
  const getCodeFromUrl = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('code');
  };

  const code = getCodeFromUrl(); // a helper function to extract the code from the URL
  console.log(code);
  if (!code) {
    return;
  }
  const userInfo = await axios.post('/api/auth/github/callback', {
    code
  })
};

export default Callback;
