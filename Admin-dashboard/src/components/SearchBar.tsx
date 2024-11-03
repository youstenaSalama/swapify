import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./SearchBar.css";

export type SearchBarType = {
  /** Style props */
  searchBarBackgroundColor?: CSSProperties["backgroundColor"];
};

const SearchBar: FunctionComponent<SearchBarType> = ({
  searchBarBackgroundColor,
}) => {
  const searchBarStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: searchBarBackgroundColor,
    };
  }, [searchBarBackgroundColor]);

  return (
    <div className="search-bar7" style={searchBarStyle}>
      <img
        className="mingcutesearch-line-icon19"
        alt=""
        src="/mingcutesearchline.svg"
      />
      <div className="search7">Search</div>
    </div>
  );
};

export default SearchBar;
