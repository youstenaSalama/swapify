import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriesDelete.css";

const CategoriesDelete: FunctionComponent = () => {
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

  const onListContainer3Click = useCallback(() => {
    navigate("/posts-requests");
  }, [navigate]);

  return (
    <div className="categories-delete">
      <div className="form12">
        <div className="form13">
          <div className="text102">Search...</div>
          <img
            className="mingcutesearch-line-icon8"
            alt=""
            src="/mingcutesearchline2.svg"
          />
        </div>
      </div>
      <div className="dropdown16">
        <div className="dropdown17">
          <div className="text103">Add Category</div>
          <img className="phplus-bold-icon1" alt="" src="/phplusbold.svg" />
        </div>
      </div>
      <div className="navbar1">
        <div className="title1">
          <div className="categories3">Categories</div>
        </div>
        <div className="search-bar1">
          <img
            className="mingcutesearch-line-icon8"
            alt=""
            src="/mingcutesearchline.svg"
          />
          <div className="search1">Search</div>
        </div>
        <div className="action3">
          <div className="admin-notification1">
            <img
              className="vuesaxboldnotification-icon2"
              alt=""
              src="/vuesaxboldnotification1.svg"
            />
            <div className="notification-number2">
              <div className="notification-number-inner" />
              <div className="div70">1</div>
            </div>
          </div>
          <img className="avatar-icon1" alt="" src="/avatar1@2x.png" />
        </div>
      </div>
      <div className="table13">
        <div className="table-header-row13">
          <div className="table-cell407">
            <div className="id4">ID</div>
          </div>
          <div className="table-cell407">
            <div className="id4">Category name</div>
          </div>
          <div className="table-cell407">
            <div className="id4">Number of Items</div>
          </div>
          <div className="table-cell407">
            <div className="id4">Created</div>
          </div>
          <div className="table-cell407">
            <div className="id4">Action</div>
          </div>
        </div>
        <div className="table-row50">
          <div className="table-cell412">
            <div className="categories3">#6548</div>
          </div>
          <div className="table-cell413">
            <div className="categories3">Electronics</div>
          </div>
          <div className="table-cell414">
            <div className="div72">150</div>
          </div>
          <div className="table-cell414">
            <div className="div72">6 April 2023</div>
          </div>
          <div className="table-cell416">
            <img className="trash-icon19" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row50">
          <div className="table-cell412">
            <div className="categories3">#6548</div>
          </div>
          <div className="table-cell413">
            <div className="categories3">Makeup</div>
          </div>
          <div className="table-cell414">
            <div className="div72">200</div>
          </div>
          <div className="table-cell414">
            <div className="div72">6 April 2023</div>
          </div>
          <div className="table-cell416">
            <img className="trash-icon19" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row50">
          <div className="table-cell412">
            <div className="categories3">#6548</div>
          </div>
          <div className="table-cell413">
            <div className="categories3">Clothes</div>
          </div>
          <div className="table-cell414">
            <div className="div72">500</div>
          </div>
          <div className="table-cell414">
            <div className="div72">6 April 2023</div>
          </div>
          <div className="table-cell416">
            <img className="trash-icon19" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row50">
          <div className="table-cell412">
            <div className="categories3">#6548</div>
          </div>
          <div className="table-cell413">
            <div className="categories3">Sports</div>
          </div>
          <div className="table-cell414">
            <div className="div72">657</div>
          </div>
          <div className="table-cell414">
            <div className="div72">6 April 2023</div>
          </div>
          <div className="table-cell416">
            <img className="trash-icon19" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row50">
          <div className="table-cell412">
            <div className="categories3">#6548</div>
          </div>
          <div className="table-cell413">
            <div className="categories3">Furniture</div>
          </div>
          <div className="table-cell414">
            <div className="div72">348</div>
          </div>
          <div className="table-cell414">
            <div className="div72">6 April 2023</div>
          </div>
          <div className="table-cell416">
            <img className="trash-icon19" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row50">
          <div className="table-cell412">
            <div className="categories3">#6548</div>
          </div>
          <div className="table-cell413">
            <div className="categories3">Kitchen</div>
          </div>
          <div className="table-cell414">
            <div className="div72">629</div>
          </div>
          <div className="table-cell414">
            <div className="div72">6 April 2023</div>
          </div>
          <div className="table-cell416">
            <img className="trash-icon19" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row50">
          <div className="table-cell412">
            <div className="categories3">#6548</div>
          </div>
          <div className="table-cell413">
            <div className="categories3">Skin Care</div>
          </div>
          <div className="table-cell414">
            <div className="div72">185</div>
          </div>
          <div className="table-cell414">
            <div className="div72">6 April 2023</div>
          </div>
          <div className="table-cell416">
            <img className="trash-icon19" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row50">
          <div className="table-cell412">
            <div className="categories3">#6548</div>
          </div>
          <div className="table-cell413">
            <div className="categories3">Body Care</div>
          </div>
          <div className="table-cell414">
            <div className="div72">374</div>
          </div>
          <div className="table-cell414">
            <div className="div72">6 April 2023</div>
          </div>
          <div className="table-cell416">
            <img className="trash-icon19" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row58">
          <div className="showing-container">
            <div className="text103">Showing</div>
            <div className="dropdown18">
              <div className="dropdown19">
                <div className="text103">10</div>
                <img
                  className="chevron-down-icon15"
                  alt=""
                  src="/chevrondown3.svg"
                />
              </div>
            </div>
            <div className="text103">of 50</div>
          </div>
          <div className="pagination2">
            <div className="pagination-text14">
              <img
                className="chevron-down-icon15"
                alt=""
                src="/chevronleft.svg"
              />
            </div>
            <div className="pagination-text15">
              <div className="text105">1</div>
            </div>
            <div className="pagination-text14">
              <div className="text105">2</div>
            </div>
            <div className="pagination-text14">
              <div className="text105">3</div>
            </div>
            <div className="pagination-text14">
              <div className="text105">4</div>
            </div>
            <div className="pagination-text14">
              <div className="text105">5</div>
            </div>
            <div className="pagination-text20">
              <img
                className="chevron-down-icon15"
                alt=""
                src="/chevronright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="menu1">
        <div className="logo1">
          <img className="logo-icon1" alt="" src="/logo1.svg" />
          <img className="trash-icon19" alt="" src="/indentdecrease.svg" />
        </div>
        <div className="section3">
          <div className="main-menu1">MAIN MENU</div>
        </div>
        <div className="pages2">
          <div className="list18" onClick={onListContainerClick}>
            <img className="smart-home-icon1" alt="" src="/smarthome1.svg" />
            <div className="id4">Dashboard</div>
            <div className="badge2">
              <div className="div87">3</div>
            </div>
            <img
              className="chevron-down-icon16"
              alt=""
              src="/chevrondown1.svg"
            />
          </div>
          <div className="list18" onClick={onListContainer1Click}>
            <img className="smart-home-icon1" alt="" src="/shoppingcart.svg" />
            <div className="id4">Transactions</div>
            <img
              className="chevron-down-icon16"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list18" onClick={onListContainer2Click}>
            <img className="smart-home-icon1" alt="" src="/users.svg" />
            <div className="id4">Customers</div>
            <img
              className="chevron-down-icon16"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list18" onClick={onListContainer3Click}>
            <img className="primesend-icon1" alt="" src="/primesend.svg" />
            <div className="id4">Posts Requests</div>
            <img
              className="chevron-down-icon16"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section4">
          <div className="main-menu1">Categories</div>
        </div>
        <div className="pages2">
          <div className="list22">
            <img className="smart-home-icon1" alt="" src="/circleplus.svg" />
            <div className="id4">Add Categories</div>
            <img
              className="chevron-down-icon16"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list23">
            <img className="smart-home-icon1" alt="" src="/box1.svg" />
            <div className="id4">Categories List</div>
            <img
              className="chevron-down-icon16"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section5">
          <div className="main-menu1">ADMIN</div>
        </div>
        <div className="pages2">
          <div className="list24">
            <img className="smart-home-icon1" alt="" src="/usercircle.svg" />
            <div className="id4">View Profile</div>
            <div className="badge2">
              <div className="div87">4</div>
            </div>
            <img
              className="chevron-down-icon16"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list22">
            <img className="smart-home-icon1" alt="" src="/settings.svg" />
            <div className="id4">Admin Roles</div>
            <img
              className="chevron-down-icon16"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
      <div className="isolation" />
      <div className="delete-msg">
        <img
          className="fluentdelete-32-filled-icon"
          alt=""
          src="/fluentdelete32filled.svg"
        />
        <div className="sure-msg">
          <div className="are-you-sure">
            Are you sure you want to remove this category?
          </div>
        </div>
        <div className="btns">
          <div className="btn-red">
            <div className="remove">Remove</div>
          </div>
          <div className="cancel">
            <div className="remove">Never</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDelete;
