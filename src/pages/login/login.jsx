import { Link } from "react-router-dom";
import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1> Empowering Developers to Connect, Learn, and Grow</h1>
          <p>
          {/* Join forces with a group of individuals sharing a common interest in web development. Let's work together and strive for growth. */}
          </p>
          <span> Don't have an account?</span>
          <Link to="/register">
            <button> Register </button>
          </Link>
        </div>
        <div className="right">
          <h1> Login </h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login