import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import "./Transactions.css";

const Transactions = () => {
  const navigate = useNavigate();
  const [exchangeRequests, setExchangeRequests] = useState([]);

  // Function to fetch accepted exchange requests from the backend
  const fetchExchangeRequests = async () => {
    try {
      const response = await fetch("http://localhost:8000/admin/listAcceptedExchangeRequests");
      if (!response.ok) {
        throw new Error("Failed to fetch exchange requests");
      }
      const data = await response.json();
      setExchangeRequests(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch exchange requests when the component mounts
    fetchExchangeRequests();
  }, []);

  // Callback to handle click on a row in the table
  const handleRowClick = useCallback((requestId) => {
    // Navigate to the details page for the selected exchange request
    navigate(`/OrderManagementDetail/${requestId}`);
  }, [navigate]);

  // Callbacks for Menu click events
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
    <div className="transactions">
      <div className="form3">
        <div className="text70">Search by Item name</div>
        <img
          className="mingcutesearch-line-icon2"
          alt=""
          src="/mingcutesearchline.svg"
        />
      </div>
      <div className="dropdown3">
        <div className="text71">Filter by date range</div>
        <img className="chevron-down-icon8" alt="" src="/chevrondown2.svg" />
      </div>
      <Table
        data={exchangeRequests}
        onRowClick={handleRowClick}
        // Pass any other necessary props to the table component
      />
      <Navbar
        dashboard="Transactions"
        propWidth="1126px"
        propRight="unset"
        propWidth1="171px"
        propWidth2="234px"
        propDisplay="flex"
        propFlex="unset"
      />
      <Menu
        smartHome="/smarthome1.svg"
        shoppingCart="/shoppingcart1.svg"
        users="/users.svg"
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

export default Transactions;
