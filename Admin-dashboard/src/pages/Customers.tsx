import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TableRow2 from "../components/TableRow2";
import DataGridRowContainer from "../components/DataGridRowContainer";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import "./Customers.css";

const Customers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch all users from the backend
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/Admin?page=2&limit=", {
        headers: {
          "Content-Type": "application/json",
          // Include authorization token if required
          // "Authorization": "Bearer <token>"
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch users. Please try again later.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Callback to handle click on a user row
  const handleUserClick = useCallback((userId) => {
    // Navigate to the details page for the selected user
    navigate(`/user/${userId}`);
  }, [navigate]);

  // Callbacks for Menu click events
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
    <div className="customers">
      {error && <div className="error-message">{error}</div>}
      <div className="table">
        <div className="table-header-row">
          <div className="table-cell">
            <div className="name">ID</div>
          </div>
          <div className="table-cell">
            <div className="name">Name</div>
          </div>
          <div className="table-cell">
            <div className="name">Phone Number</div>
          </div>
          <div className="table-cell">
            <div className="name">Created</div>
          </div>
          <div className="table-cell">
            <div className="name">Action</div>
          </div>
        </div>
        {users.map(user => (
          <TableRow2
            key={user._id} // Assuming user has a unique identifier like _id
            user={user}
            onUserClick={handleUserClick}
          />
        ))}
        <DataGridRowContainer />
      </div>
      <div className="form4">
        <div className="form5">
          <div className="text72">Search...</div>
          <img
            className="mingcutesearch-line-icon3"
            alt=""
            src="/mingcutesearchline.svg"
          />
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
      <Menu
        smartHome="/smarthome1.svg"
        shoppingCart="/shoppingcart.svg"
        users="/users1.svg"
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

export default Customers;
