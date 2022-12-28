import "./register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
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
            <input className="login-input" placeholder="Username" type="text" />
            <input className="login-input" placeholder="Email" type="email" />
            <input
              className="login-input"
              placeholder="Password"
              type="password"
            />
            <input
              className="login-input"
              placeholder="Confirn Password"
              type="password"
            />
            <button className="login-btn">Sign Up</button>
            <button className="register-btn" onClick={() => navigate("/")}>
              Log In to your Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
