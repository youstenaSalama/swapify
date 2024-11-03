import { FunctionComponent } from "react";
import "./TableRow2.css";

export type TableRow2Type = {
  /** Action props */
  onTextContainerClick?: () => void;
};

const TableRow2: FunctionComponent<TableRow2Type> = ({
  onTextContainerClick,
}) => {
  return (
    <div className="table-row150">
      <div className="table-cell1112">
        <div className="div252">#6548</div>
      </div>
      <div className="table-cell1113">
        <div className="text207" onClick={onTextContainerClick}>
          <img className="user-photo-icon1" alt="" src="/user-photo@2x.png" />
          <div className="robert-fox-parent">
            <div className="robert-fox1">Robert Fox</div>
            <div className="robertgmailcom1">robert@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="table-cell1114">
        <div className="div253">(201) 555-0124</div>
      </div>
      <div className="table-cell1114">
        <div className="div253">6 April 2023</div>
      </div>
      <div className="table-cell1116">
        <img className="trash-icon76" alt="" src="/trash2.svg" />
      </div>
    </div>
  );
};

export default TableRow2;
