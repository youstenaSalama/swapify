import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export type NavbarType = {
  dashboard?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propFlex?: CSSProperties["flex"];
};

const Navbar: FunctionComponent<NavbarType> = ({
  dashboard,
  propWidth,
  propRight,
  propWidth1,
  propWidth2,
  propDisplay,
  propFlex,
}) => {
  const navbarStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const dashboardStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      display: propDisplay,
      flex: propFlex,
    };
  }, [propWidth2, propDisplay, propFlex]);

  const navigate = useNavigate();

  const onAvatarIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="navbar8" style={navbarStyle}>
      <div className="title8" style={titleStyle}>
        <div className="dashboard8" style={dashboardStyle}>
          {dashboard}
        </div>
      </div>
      <SearchBar searchBarBackgroundColor="#ebf0f6" />
      <div className="action15">
        <div className="admin-notification7">
          <img
            className="vuesaxboldnotification-icon9"
            alt=""
            src="/vuesaxboldnotification1.svg"
          />
          <div className="notification-number9">
            <div className="notification-number-child7" />
            <div className="div199">1</div>
          </div>
        </div>
        <img
          className="avatar-icon8"
          alt=""
          src="/avatar1@2x.png"
          onClick={onAvatarIconClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
