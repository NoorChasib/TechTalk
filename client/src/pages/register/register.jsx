import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: ''

  });

  const [err, setErr] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(inputs);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/auth/register', inputs);
    } catch (err) {
      setErr(true);
    }
  };

  console.log(err)

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1> Welcome to the social media app for web developers!</h1>
          <p>
            Whether you're a seasoned pro or just starting out, this is the
            place to connect, collaborate, and grow as a web developer.
          </p>
          <span> Already have an account?</span>
          <Link to="/login">
            <button> Login </button>
          </Link>
        </div>
        <div className="right">
          <h1> Sign up </h1>
          <form> 
          <input
              type="text"
              placeholder="First Name"
              name="first name"
              onChange={handleChange}
            /> 
            <input
              type="text"
              placeholder="Last Name"
              name="last name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />

            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
