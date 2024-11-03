import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Property1Accept.css";

export type Property1AcceptType = {
  iconParkSolidcorrect?: string;

  /** Style props */
  property1AcceptBackgroundColor?: CSSProperties["backgroundColor"];
  property1AcceptBorder?: CSSProperties["border"];
  acceptColor?: CSSProperties["color"];
};

const Property1Accept: FunctionComponent<Property1AcceptType> = ({
  iconParkSolidcorrect,
  property1AcceptBackgroundColor,
  property1AcceptBorder,
  acceptColor,
}) => {
  const property1AcceptStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: property1AcceptBackgroundColor,
      border: property1AcceptBorder,
    };
  }, [property1AcceptBackgroundColor, property1AcceptBorder]);

  const acceptStyle: CSSProperties = useMemo(() => {
    return {
      color: acceptColor,
    };
  }, [acceptColor]);

  return (
    <div className="property-1accept" style={property1AcceptStyle}>
      <img
        className="icon-park-solidcorrect"
        alt=""
        src={iconParkSolidcorrect}
      />
      <div className="accept" style={acceptStyle}>
        Accept
      </div>
    </div>
  );
};

export default Property1Accept;
