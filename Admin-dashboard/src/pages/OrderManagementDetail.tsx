import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Table1 from "../components/Table1";
import Navbar1 from "../components/Navbar1";
import Menu from "../components/Menu";
import "./OrderManagementDetail.css";

const OrderManagementDetail: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onListContainer2Click = useCallback(() => {
    navigate("/customers");
  }, [navigate]);

  const onListContainer3Click = useCallback(() => {
    navigate("/posts-requests");
  }, [navigate]);

  const onPagesContainer1Click = useCallback(() => {
    navigate("/categories");
  }, [navigate]);

  return (
    <div className="order-management-detail">
      <Table1 />
      <div className="form">
        <div className="text">Search by order id</div>
        <img
          className="mingcutesearch-line-icon"
          alt=""
          src="/mingcutesearchline1.svg"
        />
      </div>
      <div className="dropdown">
        <div className="text1">Filter by date range</div>
        <img className="chevron-down-icon" alt="" src="/chevrondown4.svg" />
      </div>
      <Navbar1 />
      <Menu
        smartHome="/smarthome1.svg"
        shoppingCart="/shoppingcart1.svg"
        users="/users.svg"
        ticket="/ticket.svg"
        propBackgroundColor="unset"
        propColor="#888"
        propBackgroundColor1="#0891b2"
        propColor1="#fbfafa"
        propBackgroundColor2="unset"
        propColor2="#888"
        propBackgroundColor3="unset"
        propColor3="#888"
        onListContainerClick={onListContainerClick}
        onListContainer2Click={onListContainer2Click}
        onListContainer3Click={onListContainer3Click}
        onPagesContainer1Click={onPagesContainer1Click}
      />
    </div>
  );
};

export default OrderManagementDetail;
