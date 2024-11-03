import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriesDeleteConfirma.css";

const CategoriesDeleteConfirma: FunctionComponent = () => {
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
    <div className="categories-delete-confirma">
      <div className="form14">
        <div className="form15">
          <div className="text110">Search...</div>
          <img
            className="mingcutesearch-line-icon10"
            alt=""
            src="/mingcutesearchline2.svg"
          />
        </div>
      </div>
      <div className="dropdown20">
        <div className="dropdown21">
          <div className="text111">Add Category</div>
          <img className="phplus-bold-icon2" alt="" src="/phplusbold.svg" />
        </div>
      </div>
      <div className="navbar2">
        <div className="title2">
          <div className="categories5">Categories</div>
        </div>
        <div className="search-bar2">
          <img
            className="mingcutesearch-line-icon10"
            alt=""
            src="/mingcutesearchline.svg"
          />
          <div className="search2">Search</div>
        </div>
        <div className="action5">
          <div className="admin-notification2">
            <img
              className="vuesaxboldnotification-icon3"
              alt=""
              src="/vuesaxboldnotification1.svg"
            />
            <div className="notification-number3">
              <div className="notification-number-child1" />
              <div className="div89">1</div>
            </div>
          </div>
          <img className="avatar-icon2" alt="" src="/avatar1@2x.png" />
        </div>
      </div>
      <div className="table14">
        <div className="table-header-row14">
          <div className="table-cell452">
            <div className="id5">ID</div>
          </div>
          <div className="table-cell452">
            <div className="id5">Category name</div>
          </div>
          <div className="table-cell452">
            <div className="id5">Number of Items</div>
          </div>
          <div className="table-cell452">
            <div className="id5">Created</div>
          </div>
          <div className="table-cell452">
            <div className="id5">Action</div>
          </div>
        </div>
        <div className="table-row59">
          <div className="table-cell457">
            <div className="categories5">#6548</div>
          </div>
          <div className="table-cell458">
            <div className="categories5">Electronics</div>
          </div>
          <div className="table-cell459">
            <div className="div91">150</div>
          </div>
          <div className="table-cell459">
            <div className="div91">6 April 2023</div>
          </div>
          <div className="table-cell461">
            <img className="trash-icon27" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row59">
          <div className="table-cell457">
            <div className="categories5">#6548</div>
          </div>
          <div className="table-cell458">
            <div className="categories5">Makeup</div>
          </div>
          <div className="table-cell459">
            <div className="div91">200</div>
          </div>
          <div className="table-cell459">
            <div className="div91">6 April 2023</div>
          </div>
          <div className="table-cell461">
            <img className="trash-icon27" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row59">
          <div className="table-cell457">
            <div className="categories5">#6548</div>
          </div>
          <div className="table-cell458">
            <div className="categories5">Clothes</div>
          </div>
          <div className="table-cell459">
            <div className="div91">500</div>
          </div>
          <div className="table-cell459">
            <div className="div91">6 April 2023</div>
          </div>
          <div className="table-cell461">
            <img className="trash-icon27" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row59">
          <div className="table-cell457">
            <div className="categories5">#6548</div>
          </div>
          <div className="table-cell458">
            <div className="categories5">Sports</div>
          </div>
          <div className="table-cell459">
            <div className="div91">657</div>
          </div>
          <div className="table-cell459">
            <div className="div91">6 April 2023</div>
          </div>
          <div className="table-cell461">
            <img className="trash-icon27" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row59">
          <div className="table-cell457">
            <div className="categories5">#6548</div>
          </div>
          <div className="table-cell458">
            <div className="categories5">Furniture</div>
          </div>
          <div className="table-cell459">
            <div className="div91">348</div>
          </div>
          <div className="table-cell459">
            <div className="div91">6 April 2023</div>
          </div>
          <div className="table-cell461">
            <img className="trash-icon27" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row59">
          <div className="table-cell457">
            <div className="categories5">#6548</div>
          </div>
          <div className="table-cell458">
            <div className="categories5">Kitchen</div>
          </div>
          <div className="table-cell459">
            <div className="div91">629</div>
          </div>
          <div className="table-cell459">
            <div className="div91">6 April 2023</div>
          </div>
          <div className="table-cell461">
            <img className="trash-icon27" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row59">
          <div className="table-cell457">
            <div className="categories5">#6548</div>
          </div>
          <div className="table-cell458">
            <div className="categories5">Skin Care</div>
          </div>
          <div className="table-cell459">
            <div className="div91">185</div>
          </div>
          <div className="table-cell459">
            <div className="div91">6 April 2023</div>
          </div>
          <div className="table-cell461">
            <img className="trash-icon27" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row59">
          <div className="table-cell457">
            <div className="categories5">#6548</div>
          </div>
          <div className="table-cell458">
            <div className="categories5">Body Care</div>
          </div>
          <div className="table-cell459">
            <div className="div91">374</div>
          </div>
          <div className="table-cell459">
            <div className="div91">6 April 2023</div>
          </div>
          <div className="table-cell461">
            <img className="trash-icon27" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row67">
          <div className="frame-div">
            <div className="text111">Showing</div>
            <div className="dropdown22">
              <div className="dropdown23">
                <div className="text111">10</div>
                <img
                  className="chevron-down-icon17"
                  alt=""
                  src="/chevrondown3.svg"
                />
              </div>
            </div>
            <div className="text111">of 50</div>
          </div>
          <div className="pagination3">
            <div className="pagination-text21">
              <img
                className="chevron-down-icon17"
                alt=""
                src="/chevronleft.svg"
              />
            </div>
            <div className="pagination-text22">
              <div className="text113">1</div>
            </div>
            <div className="pagination-text21">
              <div className="text113">2</div>
            </div>
            <div className="pagination-text21">
              <div className="text113">3</div>
            </div>
            <div className="pagination-text21">
              <div className="text113">4</div>
            </div>
            <div className="pagination-text21">
              <div className="text113">5</div>
            </div>
            <div className="pagination-text27">
              <img
                className="chevron-down-icon17"
                alt=""
                src="/chevronright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="menu2">
        <div className="logo2">
          <img className="logo-icon2" alt="" src="/logo1.svg" />
          <img className="trash-icon27" alt="" src="/indentdecrease.svg" />
        </div>
        <div className="section6">
          <div className="main-menu2">MAIN MENU</div>
        </div>
        <div className="pages4">
          <div className="list26" onClick={onListContainerClick}>
            <img className="smart-home-icon2" alt="" src="/smarthome1.svg" />
            <div className="id5">Dashboard</div>
            <div className="badge4">
              <div className="div106">3</div>
            </div>
            <img
              className="chevron-down-icon18"
              alt=""
              src="/chevrondown1.svg"
            />
          </div>
          <div className="list26" onClick={onListContainer1Click}>
            <img className="smart-home-icon2" alt="" src="/shoppingcart.svg" />
            <div className="id5">Transactions</div>
            <img
              className="chevron-down-icon18"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list26" onClick={onListContainer2Click}>
            <img className="smart-home-icon2" alt="" src="/users.svg" />
            <div className="id5">Customers</div>
            <img
              className="chevron-down-icon18"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list26" onClick={onListContainer3Click}>
            <img className="primesend-icon2" alt="" src="/primesend.svg" />
            <div className="id5">Posts Requests</div>
            <img
              className="chevron-down-icon18"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section7">
          <div className="main-menu2">Categories</div>
        </div>
        <div className="pages4">
          <div className="list30">
            <img className="smart-home-icon2" alt="" src="/circleplus.svg" />
            <div className="id5">Add Categories</div>
            <img
              className="chevron-down-icon18"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list31">
            <img className="smart-home-icon2" alt="" src="/box1.svg" />
            <div className="id5">Categories List</div>
            <img
              className="chevron-down-icon18"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section8">
          <div className="main-menu2">ADMIN</div>
        </div>
        <div className="pages4">
          <div className="list32">
            <img className="smart-home-icon2" alt="" src="/usercircle.svg" />
            <div className="id5">View Profile</div>
            <div className="badge4">
              <div className="div106">4</div>
            </div>
            <img
              className="chevron-down-icon18"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list30">
            <img className="smart-home-icon2" alt="" src="/settings.svg" />
            <div className="id5">Admin Roles</div>
            <img
              className="chevron-down-icon18"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
      <div className="isolation1" />
      <div className="pending-msg">
        <img
          className="icon-parkcheck-correct"
          alt=""
          src="/iconparkcheckcorrect.svg"
        />
        <div className="sure-msg1">
          <div className="category-removed-successfully">
            Category removed successfully
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDeleteConfirma;
