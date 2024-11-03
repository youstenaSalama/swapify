import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import StateDefault from "./StateDefault";
import "./Login1.css";
import axios from "axios";

const Login1: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      const response = await axios.post("http://localhost:8000/admin/loginAdmin", { email, password });
      console.log(response.data); // Assuming the response contains a token
      setLoading(false);
      // Redirect to dashboard after successful login
      navigate("/Dashboard");

    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else if (error.code === 'ECONNREFUSED') {
        setError("Unable to connect to the server. Please try again later.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="login5">
      <div className="header17">
        <div className="welcome-back">Welcome Back</div>
        <div className="sign-in-to">Sign in to continue</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="info">
          <div className="email-password">
            <div className="email1">
              <div className="welcome-back">Email</div>
              <div className="input10">
                <img
                  className="mdiemail-outline-icon"
                  alt=""
                  src="/mdiemailoutline.svg"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="email1">
              <div className="welcome-back">Password</div>
              <div className="input10">
                <img
                  className="mdiemail-outline-icon"
                  alt=""
                  src="/lock-svgrepocom.svg"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <img className="mdiemail-outline-icon" alt="" src="/eye.svg" />
              </div>
            </div>
          </div>
          <div className="forget-password">Forget password</div>
          <div className="keep-me-logged-in">
            <div className="ckeckbox">
              <div className="ckeckbox-child" />
            </div>
            <div className="keep-me-logged">Keep me logged in</div>
          </div>
        </div>
        <button type="submit" disabled={loading} className="login-button">
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <div className="error">{error}</div>}
      </form>
      <StateDefault
        stateDefaultWidth="409px"
        stateDefaultHeight="57px"
        loginFontSize="22px"
      />
    </div>
  );
};

export default Login1;
