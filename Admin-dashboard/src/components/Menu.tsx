import {
  FunctionComponent,
  useMemo,
  CSSProperties,
  useCallback,
} from "react";
import LogoIcon from "./LogoIcon";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

export type MenuType = {
  smartHome?: string;
  shoppingCart?: string;
  users?: string;
  ticket?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor1?: CSSProperties["color"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propColor2?: CSSProperties["color"];
  propBackgroundColor3?: CSSProperties["backgroundColor"];
  propColor3?: CSSProperties["color"];

  /** Action props */
  onListContainerClick?: () => void;
  onListContainer1Click?: () => void;
  onListContainer2Click?: () => void;
  onListContainer3Click?: () => void;
  onPagesContainer1Click?: () => void;
};

const Menu: FunctionComponent<MenuType> = ({
  smartHome,
  shoppingCart,
  users,
  ticket,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propColor1,
  propBackgroundColor2,
  propColor2,
  propBackgroundColor3,
  propColor3,
  onListContainerClick,
  onListContainer1Click,
  onListContainer2Click,
  onListContainer3Click,
  onPagesContainer1Click,
}) => {
  const listStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const dashboard1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const list1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const transactionsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const list2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const customersStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const list3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const postsRequestsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const navigate = useNavigate();

  const handleListContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="menu7">
      <div className="logo8">
        <LogoIcon logo="/logo1.svg" propWidth="76px" propHeight="22px" />
        <img
          className="indent-decrease-icon7"
          alt=""
          src="/indentdecrease.svg"
        />
      </div>
      <div className="section21">
        <div className="main-menu7">MAIN MENU</div>
      </div>
      <div className="pages14">
        <div
          className="list77"
          style={listStyle}
          onClick={handleListContainerClick}
        >
          <img className="smart-home-icon7" alt="" src={smartHome} />
          <div className="dashboard9" style={dashboard1Style}>
            Dashboard
          </div>
          <div className="badge14">
            <div className="div200">3</div>
          </div>
          <img className="chevron-down-icon29" alt="" src="/chevrondown1.svg" />
        </div>
        <div
          className="list78"
          onClick={onListContainer1Click}
          style={list1Style}
        >
          <img className="smart-home-icon7" alt="" src={shoppingCart} />
          <div className="dashboard9" style={transactionsStyle}>
            Transactions
          </div>
          <img className="chevron-down-icon29" alt="" src="/chevronright.svg" />
        </div>
        <div
          className="list78"
          onClick={onListContainer2Click}
          style={list2Style}
        >
          <img className="smart-home-icon7" alt="" src={users} />
          <div className="dashboard9" style={customersStyle}>
            Customers
          </div>
          <img className="chevron-down-icon29" alt="" src="/chevronright.svg" />
        </div>
        <div
          className="list78"
          onClick={onListContainer3Click}
          style={list3Style}
        >
          <img className="primesend-icon7" alt="" src="/primesend.svg" />
          <div className="dashboard9" style={postsRequestsStyle}>
            Posts Requests
          </div>
          <img className="chevron-down-icon29" alt="" src="/chevronright.svg" />
        </div>
      </div>
      <div className="section22">
        <div className="main-menu7">Categories</div>
      </div>
      <div className="pages15" onClick={onPagesContainer1Click}>
        <div className="list81">
          <img className="smart-home-icon7" alt="" src="/circleplus.svg" />
          <div className="dashboard9">Add Categories</div>
          <img className="chevron-down-icon29" alt="" src="/chevronright.svg" />
        </div>
        <div className="list82">
          <img className="smart-home-icon7" alt="" src="/box.svg" />
          <div className="dashboard9">Categories List</div>
          <img className="chevron-down-icon29" alt="" src="/chevronright.svg" />
        </div>
      </div>
      <div className="section23">
        <div className="main-menu7">ADMIN</div>
      </div>
      <div className="pages14">
        <div className="list78" onClick={onListContainerClick}>
          <img className="smart-home-icon7" alt="" src="/usercircle.svg" />
          <div className="dashboard9">View Profile</div>
          <div className="badge14">
            <div className="div200">4</div>
          </div>
          <img className="chevron-down-icon29" alt="" src="/chevronright.svg" />
        </div>
        <div className="list81">
          <img className="smart-home-icon7" alt="" src="/settings.svg" />
          <div className="dashboard9">Admin Roles</div>
          <img className="chevron-down-icon29" alt="" src="/chevronright.svg" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
