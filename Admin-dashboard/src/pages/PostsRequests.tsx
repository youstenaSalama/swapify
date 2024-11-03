import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Table4 from "../components/Table4";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import "./PostsRequests.css";

const PostsRequests: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onListContainer1Click = useCallback(() => {
    navigate("/transactions");
  }, [navigate]);

  const onListContainer2Click = useCallback(() => {
    navigate("/customers");
  }, [navigate]);

  const onPagesContainer1Click = useCallback(() => {
    navigate("/categories");
  }, [navigate]);

  return (
    <div className="posts-requests">
      <Table4 />
      <div className="form8">
        <div className="form9">
          <div className="text91">Search...</div>
          <img
            className="mingcutesearch-line-icon5"
            alt=""
            src="/mingcutesearchline.svg"
          />
        </div>
      </div>
      <div className="dropdown8">
        <div className="dropdown9">
          <div className="text92">Filter by date range</div>
          <img className="chevron-down-icon11" alt="" src="/chevrondown2.svg" />
        </div>
      </div>
      <div className="dropdown10">
        <div className="dropdown9">
          <div className="text92">Status : Pending</div>
          <img className="chevron-down-icon11" alt="" src="/chevrondown2.svg" />
        </div>
      </div>
      <Navbar
        dashboard="Posts Requests"
        propWidth="calc(100% - 314px)"
        propRight="22px"
        propWidth1="195px"
        propWidth2="unset"
        propDisplay="unset"
        propFlex="1"
      />
      <Menu
        smartHome="/smarthome1.svg"
        shoppingCart="/shoppingcart.svg"
        users="/users.svg"
        propBackgroundColor="unset"
        propColor="#888"
        propBackgroundColor1="unset"
        propColor1="#888"
        propBackgroundColor2="unset"
        propColor2="#888"
        propBackgroundColor3="#0891b2"
        propColor3="#fbfafa"
        onListContainerClick={onListContainerClick}
        onListContainer1Click={onListContainer1Click}
        onListContainer2Click={onListContainer2Click}
        onPagesContainer1Click={onPagesContainer1Click}
      />
    </div>
  );
};

export default PostsRequests;
