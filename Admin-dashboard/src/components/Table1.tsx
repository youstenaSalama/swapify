import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TableRow from "./TableRow";
import TableRow1 from "./TableRow1";
import "./Table1.css";

const Table1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMaterialSymbolsarrowDropDoIconClick = useCallback(() => {
    navigate("/transactions");
  }, [navigate]);

  return (
    <div className="table19">
      <div className="table-header-row19">
        <div className="table-cell696">
          <div className="order-id">Order id</div>
        </div>
        <div className="table-cell696">
          <div className="created8">Created</div>
        </div>
        <div className="table-cell696">
          <div className="order-id">From</div>
        </div>
        <div className="table-cell696">
          <div className="order-id">item</div>
        </div>
        <div className="table-cell696">
          <div className="order-id">to</div>
        </div>
        <div className="table-cell696">
          <div className="order-id">item</div>
        </div>
        <div className="table-cell702">
          <img className="trash-icon61" alt="" src="/trash.svg" />
        </div>
      </div>
      <TableRow
        materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
        propBorderBottom="1px solid var(--color-lavender)"
        propBackgroundColor="unset"
      />
      <TableRow
        materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
        propBorderBottom="1px solid var(--color-lavender)"
        propBackgroundColor="unset"
      />
      <TableRow
        materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
        propBorderBottom="1px solid var(--color-lavender)"
        propBackgroundColor="unset"
      />
      <TableRow
        materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
        propBorderBottom="1px solid var(--color-lavender)"
        propBackgroundColor="unset"
      />
      <TableRow
        materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded1@2x.png"
        onMaterialSymbolsarrowDropDoIconClick={
          onMaterialSymbolsarrowDropDoIconClick
        }
      />
      <div className="table20">
        <div className="table-header-row20">
          <div className="table-cell703">
            <div className="order-id">#</div>
          </div>
          <div className="table-cell704">
            <div className="product-111">Product #1</div>
          </div>
          <div className="table-cell705">
            <div className="order-id">Price</div>
          </div>
          <div className="table-cell706">
            <div className="order-id">discription</div>
          </div>
          <div className="table-cell704">
            <div className="order-id">product #2</div>
          </div>
          <div className="table-cell705">
            <div className="order-id">Price</div>
          </div>
          <div className="table-cell706">
            <div className="order-id">Discription</div>
          </div>
        </div>
        <div className="table-row104">
          <div className="table-cell710">
            <div className="div188">#6548</div>
          </div>
          <div className="table-cell711">
            <b className="apple-iphone-1311">Apple iPhone 13</b>
          </div>
          <div className="table-cell712">
            <div className="div188">$999.29</div>
          </div>
          <div className="table-cell713">
            <div className="div188">x1</div>
          </div>
          <div className="table-cell714">
            <div className="div188">Nike Air Jordan</div>
          </div>
          <div className="table-cell715">
            <div className="div188">$949.32</div>
          </div>
          <div className="table-cell713">
            <div className="div188">x1</div>
          </div>
        </div>
        <TableRow1 disc1="Disc #1" />
        <TableRow1 disc1="Disc #2" />
      </div>
      <TableRow
        materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
        propBorderBottom="1px solid var(--color-lavender)"
        propBackgroundColor="unset"
      />
      <TableRow
        materialSymbolsarrowDropD="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
        propBorderBottom="1px solid var(--color-lavender)"
        propBackgroundColor="unset"
      />
    </div>
  );
};

export default Table1;
