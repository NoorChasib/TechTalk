import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.scss';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  });

  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(inputs);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/auth/register', inputs);
      navigate("/login");
    } catch (err) {
      setErr(window.alert("Whoops! Double check your inputs"));
    }
  };

  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <div className="logo">
            <img src={require('../..//assets/logo.png')} alt="TechTalk" />
          </div>
          <h1> Social media for Developers, by Developers</h1>
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
