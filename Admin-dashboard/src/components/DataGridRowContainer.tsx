import { FunctionComponent } from "react";
import "./DataGridRowContainer.css";

const DataGridRowContainer: FunctionComponent = () => {
  return (
    <div className="table-row109">
      <div className="showing-parent4">
        <div className="showing7">Showing</div>
        <div className="dropdown36">
          <div className="dropdown37">
            <div className="showing7">10</div>
            <img
              className="chevron-down-icon30"
              alt=""
              src="/chevrondown3.svg"
            />
          </div>
        </div>
        <div className="showing7">of 50</div>
      </div>
      <div className="pagination7">
        <div className="pagination-text49">
          <img className="chevron-down-icon30" alt="" src="/chevronleft.svg" />
        </div>
        <div className="pagination-text50">
          <div className="text192">1</div>
        </div>
        <div className="pagination-text49">
          <div className="text192">2</div>
        </div>
        <div className="pagination-text49">
          <div className="text192">3</div>
        </div>
        <div className="pagination-text49">
          <div className="text192">4</div>
        </div>
        <div className="pagination-text49">
          <div className="text192">5</div>
        </div>
        <div className="pagination-text55">
          <img
            className="chevron-down-icon30"
            alt=""
            src="/chevronright1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default DataGridRowContainer;
