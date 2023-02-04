import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
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
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
