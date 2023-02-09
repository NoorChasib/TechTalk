import axios from 'axios';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';

let loaded = false

const Callback = () => {
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getCodeFromUrl = () => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get('code');
    };

    const getToken = async () => {
      if(loaded){
        return
      }
      loaded = true
      const code = getCodeFromUrl(); // a helper function to extract the code from the URL
      console.log({code});

      if (!code) {
        return;
      }
      const tokenResponse = await axios.post('/api/auth/github/callback', {
        code,
      });
      localStorage.setItem('accessToken', tokenResponse.data);
      window.location.href = `/profile/${currentUser.id}`;
      console.log('tokenRe', tokenResponse);
    };

    getToken();
  }, []);
};

export default Callback;
