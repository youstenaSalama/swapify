import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onListContainer2Click = useCallback(() => {
    navigate("/customers");
  }, [navigate]);

  const onListContainer3Click = useCallback(() => {
    navigate("/posts-requests");
  }, [navigate]);

  const onPagesContainer1Click = useCallback(() => {
    navigate("/categories");
  }, [navigate]);

  return (
    <div className="profile">
      <div className="navbar6">
        <div className="title6">
          <div className="robert">Profile</div>
        </div>
        <div className="search-bar6">
          <img
            className="mingcutesearch-line-icon18"
            alt=""
            src="/mingcutesearchline.svg"
          />
          <div className="search6">Search</div>
        </div>
        <div className="action13">
          <div className="admin-notification6">
            <img
              className="vuesaxboldnotification-icon7"
              alt=""
              src="/vuesaxboldnotification1.svg"
            />
            <div className="notification-number7">
              <div className="notification-number-child5" />
              <div className="div174">1</div>
            </div>
          </div>
          <img className="avatar-icon6" alt="" src="/avatar1@2x.png" />
        </div>
      </div>
      <div className="personal-info">Personal info</div>
      <div className="sign-in-method">Sign in method</div>
      <div className="cell">
        <div className="header7">
          <div className="first-name">First Name</div>
          <img
            className="solarpen-outline-icon"
            alt=""
            src="/solarpenoutline.svg"
          />
        </div>
        <div className="input">
          <div className="robert">Robert</div>
        </div>
      </div>
      <div className="cell1">
        <div className="header7">
          <div className="first-name">Email</div>
          <img
            className="solarpen-outline-icon"
            alt=""
            src="/solarpenoutline.svg"
          />
        </div>
        <div className="input">
          <div className="robert">robert123@gmail.com</div>
        </div>
      </div>
      <div className="cell2">
        <div className="header7">
          <div className="first-name">Contact Phone</div>
          <img
            className="solarpen-outline-icon"
            alt=""
            src="/solarpenoutline.svg"
          />
        </div>
        <div className="input2">
          <div className="div175">+20</div>
          <div className="div176">1234567890</div>
        </div>
      </div>
      <div className="cell3">
        <div className="header7">
          <div className="first-name">Company</div>
          <img
            className="solarpen-outline-icon"
            alt=""
            src="/solarpenoutline.svg"
          />
        </div>
        <div className="input">
          <div className="robert">TRD</div>
        </div>
      </div>
      <div className="cell4">
        <div className="header7">
          <div className="first-name">Country</div>
          <img
            className="solarpen-outline-icon"
            alt=""
            src="/solarpenoutline.svg"
          />
        </div>
        <div className="input">
          <div className="robert">Egypt</div>
        </div>
      </div>
      <div className="cell5">
        <div className="header7">
          <div className="first-name">Last Name</div>
          <img
            className="solarpen-outline-icon"
            alt=""
            src="/solarpenoutline.svg"
          />
        </div>
        <div className="input">
          <div className="robert">Stark</div>
        </div>
      </div>
      <div className="cell6">
        <div className="header7">
          <div className="first-name">Password</div>
          <img
            className="solarpen-outline-icon"
            alt=""
            src="/solarpenoutline.svg"
          />
        </div>
        <div className="input6">
          <div className="robert">*************</div>
          <img className="eye-icon" alt="" src="/eye1.svg" />
        </div>
      </div>
      <div className="cell7">
        <div className="header7">
          <div className="first-name">Title</div>
          <img
            className="solarpen-outline-icon"
            alt=""
            src="/solarpenoutline.svg"
          />
        </div>
        <div className="input">
          <div className="robert">Admin</div>
        </div>
      </div>
      <div className="cell8">
        <div className="header7">
          <div className="first-name">Company Site</div>
          <img
            className="solarpen-outline-icon"
            alt=""
            src="/solarpenoutline.svg"
          />
        </div>
        <div className="input">
          <div className="robert">trd.app.com</div>
        </div>
      </div>
      <div className="cell9">
        <div className="header7">
          <div className="first-name">Language</div>
          <img
            className="solarpen-outline-icon"
            alt=""
            src="/solarpenoutline.svg"
          />
        </div>
        <div className="input">
          <div className="robert">English</div>
        </div>
      </div>
      <img className="profile-child" alt="" src="/ellipse-7@2x.png" />
      <img className="edit-icon" alt="" src="/edit-icon.svg" />
      <div className="menu6">
        <div className="logo6">
          <img className="logo-icon6" alt="" src="/logo1.svg" />
          <img
            className="indent-decrease-icon6"
            alt=""
            src="/indentdecrease.svg"
          />
        </div>
        <div className="section18">
          <div className="main-menu6">MAIN MENU</div>
        </div>
        <div className="pages12">
          <div className="list58" onClick={onListContainerClick}>
            <img className="smart-home-icon6" alt="" src="/smarthome1.svg" />
            <div className="dashboard7">Dashboard</div>
            <div className="badge12">
              <div className="div178">3</div>
            </div>
            <img
              className="chevron-down-icon25"
              alt=""
              src="/chevrondown1.svg"
            />
          </div>
          <div className="list59">
            <img className="smart-home-icon6" alt="" src="/shoppingcart.svg" />
            <div className="dashboard7">Transactions</div>
            <img
              className="chevron-down-icon25"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list58" onClick={onListContainer2Click}>
            <img className="smart-home-icon6" alt="" src="/users.svg" />
            <div className="dashboard7">Customers</div>
            <img
              className="chevron-down-icon25"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list58" onClick={onListContainer3Click}>
            <img className="primesend-icon6" alt="" src="/primesend.svg" />
            <div className="dashboard7">Posts Requests</div>
            <img
              className="chevron-down-icon25"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section19">
          <div className="main-menu6">Categories</div>
        </div>
        <div className="pages13" onClick={onPagesContainer1Click}>
          <div className="list62">
            <img className="smart-home-icon6" alt="" src="/circleplus.svg" />
            <div className="dashboard7">Add Categories</div>
            <img
              className="chevron-down-icon25"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list59">
            <img className="smart-home-icon6" alt="" src="/box.svg" />
            <div className="dashboard7">Categories List</div>
            <img
              className="chevron-down-icon25"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section20">
          <div className="main-menu6">ADMIN</div>
        </div>
        <div className="components6">
          <div className="list64">
            <img className="smart-home-icon6" alt="" src="/usercircle1.svg" />
            <div className="dashboard7">View Profile</div>
            <div className="badge12">
              <div className="div178">4</div>
            </div>
            <img
              className="chevron-down-icon25"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list65">
            <img className="smart-home-icon6" alt="" src="/settings.svg" />
            <div className="dashboard7">Admin Roles</div>
            <img
              className="chevron-down-icon25"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
