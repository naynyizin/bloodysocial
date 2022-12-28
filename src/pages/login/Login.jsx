import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const navigate = useNavigate();

  const loginfun = () => {
    if (!email || !psw) {
      return;
    }
    navigate("/home");
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h4 className="login-logo">B100DYSOCIAL</h4>
          <div className="login-desc">
            Connect with Friends and The world around you on bloodysocial.
          </div>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input
              className="login-input"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="login-input"
              placeholder="Password"
              type="password"
              onChange={(e) => setPsw(e.target.value)}
            />
            <button className="login-btn" onClick={loginfun}>
              Log In
            </button>
            <span className="forgot-text">Forgot Password</span>
            <button
              className="register-btn"
              onClick={() => {
                navigate("/register");
              }}
            >
              Create New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
