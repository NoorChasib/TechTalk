import axios from 'axios';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext';


const Callback = () => {
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getCodeFromUrl = () => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get('code');
    };

    const getToken = async () => {
      const code = getCodeFromUrl(); // a helper function to extract the code from the URL
      const tokenResponse = await axios.post('/api/auth/github/callback', {
        code,
      });
      console.log(tokenResponse.data);
      localStorage.setItem('accessToken', tokenResponse.data);
      window.location.href=`/profile/${currentUser.id}`
      console.log(code);
      
      if (!code) {
        return;
      }
    };

    getToken();
  }, []);

};

export default Callback;
