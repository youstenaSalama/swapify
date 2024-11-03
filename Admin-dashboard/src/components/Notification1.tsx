import { FunctionComponent } from "react";
import "./Notification1.css";

export type Notification1Type = {
  vuesaxboldnotification?: string;
  showNotificationNumber?: boolean;
};

const Notification1: FunctionComponent<Notification1Type> = ({
  vuesaxboldnotification,
  showNotificationNumber = true,
}) => {
  return (
    <div className="notification">
      <img
        className="vuesaxboldnotification-icon"
        alt=""
        src={vuesaxboldnotification}
      />
      {showNotificationNumber && (
        <div className="notification-number">
          <div className="notification-number-child" />
          <div className="div">1</div>
        </div>
      )}
    </div>
  );
};

export default Notification1;
