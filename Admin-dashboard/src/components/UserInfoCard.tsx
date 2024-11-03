import { FunctionComponent } from "react";
import "./UserInfoCard.css";

const UserInfoCard: FunctionComponent = () => {
  return (
    <div className="user-info-card">
      <div className="user-info-section">
        <div className="user-info">
          <img className="user-photo-icon" alt="" src="/user-photo1@2x.png" />
          <div className="info1">
            <div className="robert-fox">Robert Fox</div>
            <div className="robertgmailcom">robert@gmail.com</div>
          </div>
        </div>
        <div className="personal-info-section">
          <div className="break-line" />
          <div className="personal-info1">
            <div className="personal-information">PERSONAL INFORMATION</div>
            <div className="info2">
              <div className="contact-number-gender-container">
                <p className="contact-number">Contact Number</p>
                <p className="contact-number">Gender</p>
                <p className="contact-number">Date of Birth</p>
                <p className="member-since">Member Since</p>
              </div>
              <div className="contact-number-gender-container">
                <p className="contact-number">(201) 555-0124</p>
                <p className="contact-number">Male</p>
                <p className="contact-number">1 Jan, 1985</p>
                <p className="member-since">3 March, 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="address-section">
          <div className="break-line" />
          <div className="address">
            <div className="address1">Address</div>
            <div className="nasr-city">Nasr City , Cairo</div>
            <div className="total-requestsposts">
              <div className="tab3">
                <b className="b3">150</b>
                <div className="total-requests">Total Requests</div>
              </div>
              <div className="tab3">
                <b className="b3">10</b>
                <div className="total-requests">Posts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-tabs">
        <div className="all-requests">
          <div className="all-requests1">All Requests</div>
        </div>
        <div className="posts1">
          <div className="all-requests1">Posts</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
