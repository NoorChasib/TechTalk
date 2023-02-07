import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
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

  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <div className="logo">
            <img src={require('../..//assets/logo.png')} alt="TechTalk" />
            {/* <h4>TechTalk</h4> */}
          </div>
          <h1> Social media for Developers, by Developers</h1>
          {/* <p>
            Whether you're a seasoned pro or just starting out, this is the
            place to connect, collaborate, and grow as a web developer.
          </p> */}
          <div className="account">
            <span> Already have an account?</span>
            <Link to="/login">
              <button> Login </button>
            </Link>
          </div>
        </div>
        <div className="right">
          <h1> Get Started </h1>
          <form>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
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
          </form>
          <button onClick={handleClick}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
