import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./LogoIcon.css";

export type LogoIconType = {
  logo?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const LogoIcon: FunctionComponent<LogoIconType> = ({
  logo,
  propWidth,
  propHeight,
}) => {
  const logoIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return <img className="logo-icon7" alt="" src={logo} style={logoIconStyle} />;
};

export default LogoIcon;
