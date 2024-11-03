import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./TableRow.css";

export type TableRowType = {
  materialSymbolsarrowDropD?: string;

  /** Style props */
  propBorderBottom?: CSSProperties["borderBottom"];
  propBackgroundColor?: CSSProperties["backgroundColor"];

  /** Action props */
  onMaterialSymbolsarrowDropDoIconClick?: () => void;
};

const TableRow: FunctionComponent<TableRowType> = ({
  materialSymbolsarrowDropD,
  propBorderBottom,
  propBackgroundColor,
  onMaterialSymbolsarrowDropDoIconClick,
}) => {
  const tableRowStyle: CSSProperties = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorderBottom, propBackgroundColor]);

  return (
    <div className="table-row102" style={tableRowStyle}>
      <div className="table-cell682">
        <div className="text143">
          <div className="div186">#6548</div>
        </div>
      </div>
      <div className="table-cell683">
        <div className="min-ago11">2 min ago</div>
      </div>
      <div className="table-cell684">
        <div className="min-ago11">Joseph Wheeler</div>
      </div>
      <div className="table-cell685">
        <div className="nike-air-jordan33">Nike Air Jordan</div>
      </div>
      <div className="table-cell684">
        <div className="min-ago11">Joseph Wheeler</div>
      </div>
      <div className="table-cell685">
        <div className="nike-air-jordan33">Nike Air Jordan</div>
      </div>
      <div className="table-cell688">
        <img className="trash-icon60" alt="" src="/trash1.svg" />
        <img
          className="material-symbolsarrow-drop-do-icon11"
          alt=""
          src={materialSymbolsarrowDropD}
          onClick={onMaterialSymbolsarrowDropDoIconClick}
        />
      </div>
    </div>
  );
};

export default TableRow;
