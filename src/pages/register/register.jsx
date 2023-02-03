import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1> Empowering Developers to Connect, Learn, and Grow</h1>
          <p>
            Welcome to the social media app for web developers! Whether you're a seasoned pro or just starting out, this is the place to connect, collaborate, and grow as a web developer.
          </p>
          <span> Already have an account?</span> 
          <Link to="/login">
          <button> Login </button>
          </Link>
        </div>
        <div className="right">
          <h1> Sign up </h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register