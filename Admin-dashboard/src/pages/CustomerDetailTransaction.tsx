import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Table2 from "../components/Table2";
import Navbar from "../components/Navbar";
import UserInfoCard from "../components/UserInfoCard";
import Menu from "../components/Menu";
import "./CustomerDetailTransaction.css";

const CustomerDetailTransaction: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onListContainer1Click = useCallback(() => {
    navigate("/transactions");
  }, [navigate]);

  const onListContainer3Click = useCallback(() => {
    navigate("/posts-requests");
  }, [navigate]);

  const onPagesContainer1Click = useCallback(() => {
    navigate("/categories");
  }, [navigate]);

  return (
    <div className="customer-detail-transaction">
      <Table2 />
      <div className="form1">
        <div className="form2">
          <div className="text2">Search by Request id</div>
          <img
            className="mingcutesearch-line-icon1"
            alt=""
            src="/mingcutesearchline2.svg"
          />
        </div>
      </div>
      <div className="dropdown1">
        <div className="dropdown2">
          <div className="text3">Filter by date range</div>
          <img className="chevron-down-icon1" alt="" src="/chevrondown2.svg" />
        </div>
      </div>
      <Navbar
        dashboard="Customers"
        propWidth="calc(100% - 314px)"
        propRight="22px"
        propWidth1="148px"
        propWidth2="unset"
        propDisplay="unset"
        propFlex="1"
      />
      <UserInfoCard />
      <Menu
        smartHome="/smarthome1.svg"
        shoppingCart="/shoppingcart.svg"
        users="/users1.svg"
        ticket="/ticket.svg"
        propBackgroundColor="unset"
        propColor="#888"
        propBackgroundColor1="unset"
        propColor1="#888"
        propBackgroundColor2="#0891b2"
        propColor2="#fbfafa"
        propBackgroundColor3="unset"
        propColor3="#888"
        onListContainerClick={onListContainerClick}
        onListContainer1Click={onListContainer1Click}
        onListContainer3Click={onListContainer3Click}
        onPagesContainer1Click={onPagesContainer1Click}
      />
    </div>
  );
};

export default CustomerDetailTransaction;
