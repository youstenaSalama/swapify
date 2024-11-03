import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./StateDefault.css";

export type StateDefaultType = {
  /** Style props */
  stateDefaultWidth?: CSSProperties["width"];
  stateDefaultHeight?: CSSProperties["height"];
  loginFontSize?: CSSProperties["fontSize"];
};

const StateDefault: FunctionComponent<StateDefaultType> = ({
  stateDefaultWidth,
  stateDefaultHeight,
  loginFontSize,
}) => {
  const stateDefaultStyle: CSSProperties = useMemo(() => {
    return {
      width: stateDefaultWidth,
      height: stateDefaultHeight,
    };
  }, [stateDefaultWidth, stateDefaultHeight]);

  const loginStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: loginFontSize,
    };
  }, [loginFontSize]);

  return (
    <div className="statedefault" style={stateDefaultStyle}>
      <div className="login4" style={loginStyle}>
        Login
      </div>
    </div>
  );
};

export default StateDefault;
