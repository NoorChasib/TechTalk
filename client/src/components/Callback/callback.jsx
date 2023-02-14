import axios from 'axios';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';

let loaded = false;

const Callback = () => {
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getCodeFromUrl = () => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get('code');
    };

    const getToken = async () => {
      if (loaded) {
        return;
      }
      loaded = true;
      const code = getCodeFromUrl(); // a helper function to extract the code from the URL
      console.log({ code });

      if (!code) {
        return;
      }
      const tokenResponse = await axios.post('/api/auth/github/callback', {
        code,
      });

      console.log('tokenRe', tokenResponse);

      if (tokenResponse.data) {
        localStorage.setItem('accessToken', tokenResponse.data);
        window.location.href = `/profile/${currentUser.id}`;
      }
      return <div>Error! Unable to get token.</div>;
    };

    getToken();
  }, [currentUser.id]);
};

export default Callback;
