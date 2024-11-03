import { FunctionComponent } from "react";
import LogoIcon from "../components/LogoIcon";
import Login1 from "../components/Login1";
import "./LogIn.css";

const LogIn: FunctionComponent = () => {
  return (
    <div className="log-in">
      <img className="background-icon" alt="" src="/background@2x.png" />
      <div className="login-form">
        <LogoIcon logo="/logo.svg" />
        <Login1 />
      </div>
      <div className="sign-up">
        <div className="hello">
          <div className="hello1">Hello</div>
          <div className="enter-your-info">
            Enter your info to go to your account.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
