import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

const Categories: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDropdownContainerClick = useCallback(() => {
    navigate("/add-category");
  }, [navigate]);

  const onTrashIconClick = useCallback(() => {
    navigate("/categories-delete");
  }, [navigate]);

  const onListContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onListContainer1Click = useCallback(() => {
    navigate("/transactions");
  }, [navigate]);

  const onListContainer2Click = useCallback(() => {
    navigate("/customers");
  }, [navigate]);

  const onListContainer3Click = useCallback(() => {
    navigate("/posts-requests");
  }, [navigate]);

  const onListContainer4Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="categories">
      <div className="form10">
        <div className="form11">
          <div className="text94">Search...</div>
          <img
            className="mingcutesearch-line-icon6"
            alt=""
            src="/mingcutesearchline2.svg"
          />
        </div>
      </div>
      <div className="dropdown12" onClick={onDropdownContainerClick}>
        <div className="dropdown13">
          <div className="text95">Add Category</div>
          <img className="phplus-bold-icon" alt="" src="/phplusbold.svg" />
        </div>
      </div>
      <div className="table12">
        <div className="table-header-row12">
          <div className="table-cell362">
            <div className="category-name">ID</div>
          </div>
          <div className="table-cell362">
            <div className="category-name">Category name</div>
          </div>
          <div className="table-cell362">
            <div className="category-name">Number of Items</div>
          </div>
          <div className="table-cell362">
            <div className="category-name">Created</div>
          </div>
          <div className="table-cell362">
            <div className="category-name">Action</div>
          </div>
        </div>
        <div className="table-row41">
          <div className="table-cell367">
            <div className="makeup">#6548</div>
          </div>
          <div className="table-cell368">
            <div className="makeup">Electronics</div>
          </div>
          <div className="table-cell369">
            <div className="div52">150</div>
          </div>
          <div className="table-cell369">
            <div className="div52">6 April 2023</div>
          </div>
          <div className="table-cell371">
            <img
              className="trash-icon11"
              alt=""
              src="/trash2.svg"
              onClick={onTrashIconClick}
            />
          </div>
        </div>
        <div className="table-row41">
          <div className="table-cell367">
            <div className="makeup">#6548</div>
          </div>
          <div className="table-cell368">
            <div className="makeup">Makeup</div>
          </div>
          <div className="table-cell369">
            <div className="div52">200</div>
          </div>
          <div className="table-cell369">
            <div className="div52">6 April 2023</div>
          </div>
          <div className="table-cell371">
            <img className="indent-decrease-icon" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row41">
          <div className="table-cell367">
            <div className="makeup">#6548</div>
          </div>
          <div className="table-cell368">
            <div className="makeup">Clothes</div>
          </div>
          <div className="table-cell369">
            <div className="div52">500</div>
          </div>
          <div className="table-cell369">
            <div className="div52">6 April 2023</div>
          </div>
          <div className="table-cell371">
            <img className="indent-decrease-icon" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row41">
          <div className="table-cell367">
            <div className="makeup">#6548</div>
          </div>
          <div className="table-cell368">
            <div className="makeup">Sports</div>
          </div>
          <div className="table-cell369">
            <div className="div52">657</div>
          </div>
          <div className="table-cell369">
            <div className="div52">6 April 2023</div>
          </div>
          <div className="table-cell371">
            <img className="indent-decrease-icon" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row41">
          <div className="table-cell367">
            <div className="makeup">#6548</div>
          </div>
          <div className="table-cell368">
            <div className="makeup">Furniture</div>
          </div>
          <div className="table-cell369">
            <div className="div52">348</div>
          </div>
          <div className="table-cell369">
            <div className="div52">6 April 2023</div>
          </div>
          <div className="table-cell371">
            <img className="indent-decrease-icon" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row41">
          <div className="table-cell367">
            <div className="makeup">#6548</div>
          </div>
          <div className="table-cell368">
            <div className="makeup">Kitchen</div>
          </div>
          <div className="table-cell369">
            <div className="div52">629</div>
          </div>
          <div className="table-cell369">
            <div className="div52">6 April 2023</div>
          </div>
          <div className="table-cell371">
            <img className="indent-decrease-icon" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row41">
          <div className="table-cell367">
            <div className="makeup">#6548</div>
          </div>
          <div className="table-cell368">
            <div className="makeup">Skin Care</div>
          </div>
          <div className="table-cell369">
            <div className="div52">185</div>
          </div>
          <div className="table-cell369">
            <div className="div52">6 April 2023</div>
          </div>
          <div className="table-cell371">
            <img className="indent-decrease-icon" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row41">
          <div className="table-cell367">
            <div className="makeup">#6548</div>
          </div>
          <div className="table-cell368">
            <div className="makeup">Body Care</div>
          </div>
          <div className="table-cell369">
            <div className="div52">374</div>
          </div>
          <div className="table-cell369">
            <div className="div52">6 April 2023</div>
          </div>
          <div className="table-cell371">
            <img className="indent-decrease-icon" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row49">
          <div className="showing-group">
            <div className="text95">Showing</div>
            <div className="dropdown14">
              <div className="dropdown15">
                <div className="text95">10</div>
                <img
                  className="chevron-down-icon13"
                  alt=""
                  src="/chevrondown3.svg"
                />
              </div>
            </div>
            <div className="text95">of 50</div>
          </div>
          <div className="pagination1">
            <div className="pagination-text7">
              <img
                className="chevron-down-icon13"
                alt=""
                src="/chevronleft.svg"
              />
            </div>
            <div className="pagination-text8">
              <div className="text97">1</div>
            </div>
            <div className="pagination-text7">
              <div className="text97">2</div>
            </div>
            <div className="pagination-text7">
              <div className="text97">3</div>
            </div>
            <div className="pagination-text7">
              <div className="text97">4</div>
            </div>
            <div className="pagination-text7">
              <div className="text97">5</div>
            </div>
            <div className="pagination-text13">
              <img
                className="chevron-down-icon13"
                alt=""
                src="/chevronright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="title">
          <div className="makeup">Categories</div>
        </div>
        <div className="search-bar">
          <img
            className="mingcutesearch-line-icon6"
            alt=""
            src="/mingcutesearchline.svg"
          />
          <div className="search">Search</div>
        </div>
        <div className="action2">
          <div className="admin-notification">
            <img
              className="vuesaxboldnotification-icon1"
              alt=""
              src="/vuesaxboldnotification1.svg"
            />
            <div className="notification-number1">
              <div className="notification-number-item" />
              <div className="div67">1</div>
            </div>
          </div>
          <img className="avatar-icon" alt="" src="/avatar1@2x.png" />
        </div>
      </div>
      <div className="menu">
        <div className="logo">
          <img className="logo-icon" alt="" src="/logo1.svg" />
          <img
            className="indent-decrease-icon"
            alt=""
            src="/indentdecrease.svg"
          />
        </div>
        <div className="section">
          <div className="main-menu">MAIN MENU</div>
        </div>
        <div className="pages">
          <div className="list10" onClick={onListContainerClick}>
            <img className="smart-home-icon" alt="" src="/smarthome1.svg" />
            <div className="category-name">Dashboard</div>
            <div className="badge">
              <div className="div68">3</div>
            </div>
            <img
              className="chevron-down-icon14"
              alt=""
              src="/chevrondown1.svg"
            />
          </div>
          <div className="list10" onClick={onListContainer1Click}>
            <img className="smart-home-icon" alt="" src="/shoppingcart.svg" />
            <div className="category-name">Transactions</div>
            <img
              className="chevron-down-icon14"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list10" onClick={onListContainer2Click}>
            <img className="smart-home-icon" alt="" src="/users.svg" />
            <div className="category-name">Customers</div>
            <img
              className="chevron-down-icon14"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list10" onClick={onListContainer3Click}>
            <img className="primesend-icon" alt="" src="/primesend.svg" />
            <div className="category-name">Posts Requests</div>
            <img
              className="chevron-down-icon14"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section1">
          <div className="main-menu">Categories</div>
        </div>
        <div className="pages">
          <div className="list14">
            <img className="smart-home-icon" alt="" src="/circleplus.svg" />
            <div className="category-name">Add Categories</div>
            <img
              className="chevron-down-icon14"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list15">
            <img className="smart-home-icon" alt="" src="/box1.svg" />
            <div className="category-name">Categories List</div>
            <img
              className="chevron-down-icon14"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section2">
          <div className="main-menu">ADMIN</div>
        </div>
        <div className="pages">
          <div className="list10" onClick={onListContainer4Click}>
            <img className="smart-home-icon" alt="" src="/usercircle.svg" />
            <div className="category-name">View Profile</div>
            <div className="badge">
              <div className="div68">4</div>
            </div>
            <img
              className="chevron-down-icon14"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list14">
            <img className="smart-home-icon" alt="" src="/settings.svg" />
            <div className="category-name">Admin Roles</div>
            <img
              className="chevron-down-icon14"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
