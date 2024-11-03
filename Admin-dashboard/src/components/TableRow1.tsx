import { FunctionComponent } from "react";
import "./TableRow1.css";

export type TableRow1Type = {
  disc1?: string;
};

const TableRow1: FunctionComponent<TableRow1Type> = ({ disc1 }) => {
  return (
    <div className="table-row103">
      <div className="table-cell689">
        <div className="disc-111">{disc1}</div>
      </div>
      <div className="table-cell690">
        <div className="lorem-ipsum-dolor22">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id
          tempus felis. Ut non venenatis erat. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Nunc porta diam
          et nibh suscipit ultrices. Nullam hendrerit neque ac lorem ultricies
          pulvinar. Nullam consequat justo at erat elementum, laoreet convallis
          ex condimentum. Aliquam egestas vitae nunc id blandit.
        </div>
      </div>
      <div className="table-cell691" />
      <div className="table-cell692" />
      <div className="table-cell693" />
      <div className="table-cell694" />
      <div className="table-cell692" />
    </div>
  );
};

export default TableRow1;
