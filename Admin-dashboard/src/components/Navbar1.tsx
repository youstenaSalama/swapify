import { FunctionComponent } from "react";
import SearchBar from "./SearchBar";
import Notification1 from "./Notification1";
import "./Navbar1.css";

const Navbar1: FunctionComponent = () => {
  return (
    <div className="navbar7">
      <div className="search8">
        <img className="search-icon" alt="" src="/search.svg" />
        <div className="transactions8">Transactions</div>
      </div>
      <SearchBar searchBarBackgroundColor="#ebf0f6" />
      <div className="action14">
        <Notification1
          vuesaxboldnotification="/vuesaxboldnotification.svg"
          showNotificationNumber
        />
        <img className="avatar-icon7" alt="" src="/avatar@2x.png" />
      </div>
    </div>
  );
};

export default Navbar1;
