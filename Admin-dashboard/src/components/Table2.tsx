import { FunctionComponent, useCallback } from "react";
import TableRow4 from "./TableRow3";
import { useNavigate } from "react-router-dom";
import TableRow1 from "./TableRow1";
import "./Table2.css";

const Table2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMaterialSymbolsarrowDropDoIconClick = useCallback(() => {
    navigate("/customer-detail-transaction-detail");
  }, [navigate]);

  return (
    <div className="table21">
      <div className="table-header-row21">
        <div className="table-cell723">
          <div className="request-id">Request id</div>
        </div>
        <div className="table-cell723">
          <div className="created9">Created</div>
        </div>
        <div className="table-cell723">
          <div className="request-id">To</div>
        </div>
        <div className="table-cell723">
          <div className="request-id">Item</div>
        </div>
        <div className="table-cell723">
          <div className="request-id">With</div>
        </div>
        <div className="table-cell728">
          <img className="trash-icon63" alt="" src="/trash.svg" />
        </div>
      </div>
      <TableRow4 />
      <TableRow4 />
      <div className="table-row106">
        <div className="table-cell729">
          <div className="text145">
            <div className="div192">#6548</div>
          </div>
        </div>
        <div className="table-cell730">
          <div className="min-ago13">2 min ago</div>
        </div>
        <div className="table-cell731">
          <div className="joseph-wheeler35">Joseph Wheeler</div>
        </div>
        <div className="table-cell732">
          <div className="apple-iphone-1313">Apple iPhone 13</div>
        </div>
        <div className="table-cell733">
          <div className="nike-air-jordan37">Nike Air Jordan</div>
        </div>
        <div className="table-cell734">
          <img
            className="material-symbolsarrow-drop-do-icon13"
            alt=""
            src="/materialsymbolsarrowdropdowncircleoutlinerounded2@2x.png"
            onClick={onMaterialSymbolsarrowDropDoIconClick}
          />
        </div>
      </div>
      <div className="table22">
        <div className="table-header-row22">
          <div className="table-cell735">
            <div className="request-id">#</div>
          </div>
          <div className="table-cell736">
            <div className="product-112">Product #1</div>
          </div>
          <div className="table-cell737">
            <div className="request-id">Price</div>
          </div>
          <div className="table-cell738">
            <div className="request-id">discription</div>
          </div>
          <div className="table-cell736">
            <div className="request-id">product #2</div>
          </div>
          <div className="table-cell737">
            <div className="request-id">Price</div>
          </div>
          <div className="table-cell738">
            <div className="request-id">Discription</div>
          </div>
        </div>
        <div className="table-row107">
          <div className="table-cell742">
            <div className="div194">#6548</div>
          </div>
          <div className="table-cell743">
            <b className="apple-iphone-1314">Apple iPhone 13</b>
          </div>
          <div className="table-cell744">
            <div className="div194">$999.29</div>
          </div>
          <div className="table-cell745">
            <div className="div194">x1</div>
          </div>
          <div className="table-cell746">
            <div className="div194">Nike Air Jordan</div>
          </div>
          <div className="table-cell747">
            <div className="div194">$949.32</div>
          </div>
          <div className="table-cell745">
            <div className="div194">x1</div>
          </div>
        </div>
        <TableRow1 disc1="Disc #1" />
        <TableRow1 disc1="Disc #2" />
      </div>
      <TableRow4 />
      <div className="table-row108">
        <div className="table-cell749">
          <div className="text145">
            <div className="div192">#6548</div>
          </div>
        </div>
        <div className="table-cell750">
          <div className="min-ago13">2 min ago</div>
        </div>
        <div className="table-cell751">
          <div className="div198">$654</div>
        </div>
        <div className="table-cell752">
          <div className="apple-iphone-1313">Apple iPhone 13</div>
        </div>
        <div className="table-cell753">
          <div className="nike-air-jordan37">Nike Air Jordan</div>
        </div>
        <div className="table-cell754">
          <img className="trash-icon63" alt="" src="/trash1.svg" />
          <img
            className="material-symbolsarrow-drop-do-icon14"
            alt=""
            src="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Table2;
