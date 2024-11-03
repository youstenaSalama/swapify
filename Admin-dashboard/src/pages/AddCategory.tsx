import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCategory.css";

const AddCategory: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTrashIconClick = useCallback(() => {
    navigate("/categories-delete");
  }, [navigate]);

  const onTitleContainerClick = useCallback(() => {
    navigate("/categories");
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
    <div className="add-category">
      <div className="form16">
        <div className="form17">
          <div className="text118">Search...</div>
          <img
            className="mingcutesearch-line-icon12"
            alt=""
            src="/mingcutesearchline2.svg"
          />
        </div>
      </div>
      <div className="dropdown24">
        <div className="dropdown25">
          <div className="text119">Add Category</div>
          <img className="phplus-bold-icon3" alt="" src="/phplusbold.svg" />
        </div>
      </div>
      <div className="table15">
        <div className="table-header-row15">
          <div className="table-cell497">
            <div className="id6">ID</div>
          </div>
          <div className="table-cell497">
            <div className="id6">Category name</div>
          </div>
          <div className="table-cell497">
            <div className="id6">Number of Items</div>
          </div>
          <div className="table-cell497">
            <div className="id6">Created</div>
          </div>
          <div className="table-cell497">
            <div className="id6">Action</div>
          </div>
        </div>
        <div className="table-row68">
          <div className="table-cell502">
            <div className="enter-name">-</div>
          </div>
          <div className="table-cell503">
            <div className="enter-name">Enter name</div>
          </div>
          <div className="table-cell504">
            <div className="div109">-</div>
          </div>
          <div className="table-cell504">
            <div className="div109">-</div>
          </div>
          <div className="table-cell506">
            <div className="btn">
              <div className="login">Add Category</div>
            </div>
          </div>
        </div>
        <div className="table-row69">
          <div className="table-cell507">
            <div className="enter-name">#6548</div>
          </div>
          <div className="table-cell508">
            <div className="enter-name">Electronics</div>
          </div>
          <div className="table-cell509">
            <div className="div109">150</div>
          </div>
          <div className="table-cell509">
            <div className="div109">6 April 2023</div>
          </div>
          <div className="table-cell511">
            <img
              className="trash-icon35"
              alt=""
              src="/trash2.svg"
              onClick={onTrashIconClick}
            />
          </div>
        </div>
        <div className="table-row69">
          <div className="table-cell507">
            <div className="enter-name">#6548</div>
          </div>
          <div className="table-cell508">
            <div className="enter-name">Makeup</div>
          </div>
          <div className="table-cell509">
            <div className="div109">200</div>
          </div>
          <div className="table-cell509">
            <div className="div109">6 April 2023</div>
          </div>
          <div className="table-cell511">
            <img className="trash-icon36" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row69">
          <div className="table-cell507">
            <div className="enter-name">#6548</div>
          </div>
          <div className="table-cell508">
            <div className="enter-name">Clothes</div>
          </div>
          <div className="table-cell509">
            <div className="div109">500</div>
          </div>
          <div className="table-cell509">
            <div className="div109">6 April 2023</div>
          </div>
          <div className="table-cell511">
            <img className="trash-icon36" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row69">
          <div className="table-cell507">
            <div className="enter-name">#6548</div>
          </div>
          <div className="table-cell508">
            <div className="enter-name">Sports</div>
          </div>
          <div className="table-cell509">
            <div className="div109">657</div>
          </div>
          <div className="table-cell509">
            <div className="div109">6 April 2023</div>
          </div>
          <div className="table-cell511">
            <img className="trash-icon36" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row69">
          <div className="table-cell507">
            <div className="enter-name">#6548</div>
          </div>
          <div className="table-cell508">
            <div className="enter-name">Furniture</div>
          </div>
          <div className="table-cell509">
            <div className="div109">348</div>
          </div>
          <div className="table-cell509">
            <div className="div109">6 April 2023</div>
          </div>
          <div className="table-cell511">
            <img className="trash-icon36" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row69">
          <div className="table-cell507">
            <div className="enter-name">#6548</div>
          </div>
          <div className="table-cell508">
            <div className="enter-name">Kitchen</div>
          </div>
          <div className="table-cell509">
            <div className="div109">629</div>
          </div>
          <div className="table-cell509">
            <div className="div109">6 April 2023</div>
          </div>
          <div className="table-cell511">
            <img className="trash-icon36" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row69">
          <div className="table-cell507">
            <div className="enter-name">#6548</div>
          </div>
          <div className="table-cell508">
            <div className="enter-name">Skin Care</div>
          </div>
          <div className="table-cell509">
            <div className="div109">185</div>
          </div>
          <div className="table-cell509">
            <div className="div109">6 April 2023</div>
          </div>
          <div className="table-cell511">
            <img className="trash-icon36" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row69">
          <div className="table-cell507">
            <div className="enter-name">#6548</div>
          </div>
          <div className="table-cell508">
            <div className="enter-name">Body Care</div>
          </div>
          <div className="table-cell509">
            <div className="div109">374</div>
          </div>
          <div className="table-cell509">
            <div className="div109">6 April 2023</div>
          </div>
          <div className="table-cell511">
            <img className="trash-icon36" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row77">
          <div className="showing-parent1">
            <div className="text119">Showing</div>
            <div className="dropdown26">
              <div className="dropdown27">
                <div className="text119">10</div>
                <img
                  className="chevron-down-icon19"
                  alt=""
                  src="/chevrondown3.svg"
                />
              </div>
            </div>
            <div className="text119">of 50</div>
          </div>
          <div className="pagination4">
            <div className="pagination-text28">
              <img
                className="chevron-down-icon19"
                alt=""
                src="/chevronleft.svg"
              />
            </div>
            <div className="pagination-text29">
              <div className="text121">1</div>
            </div>
            <div className="pagination-text28">
              <div className="text121">2</div>
            </div>
            <div className="pagination-text28">
              <div className="text121">3</div>
            </div>
            <div className="pagination-text28">
              <div className="text121">4</div>
            </div>
            <div className="pagination-text28">
              <div className="text121">5</div>
            </div>
            <div className="pagination-text34">
              <img
                className="chevron-down-icon19"
                alt=""
                src="/chevronright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar3">
        <div className="title3" onClick={onTitleContainerClick}>
          <div className="enter-name">Categories</div>
        </div>
        <div className="search-bar3">
          <img
            className="mingcutesearch-line-icon12"
            alt=""
            src="/mingcutesearchline.svg"
          />
          <div className="search3">Search</div>
        </div>
        <div className="action8">
          <div className="admin-notification3">
            <img
              className="vuesaxboldnotification-icon4"
              alt=""
              src="/vuesaxboldnotification1.svg"
            />
            <div className="notification-number4">
              <div className="notification-number-child2" />
              <div className="div127">1</div>
            </div>
          </div>
          <img className="avatar-icon3" alt="" src="/avatar1@2x.png" />
        </div>
      </div>
      <div className="menu3">
        <div className="logo3">
          <img className="logo-icon3" alt="" src="/logo1.svg" />
          <img className="trash-icon36" alt="" src="/indentdecrease.svg" />
        </div>
        <div className="section9">
          <div className="main-menu3">MAIN MENU</div>
        </div>
        <div className="pages6">
          <div className="list34" onClick={onListContainerClick}>
            <img className="smart-home-icon3" alt="" src="/smarthome1.svg" />
            <div className="id6">Dashboard</div>
            <div className="badge6">
              <div className="div128">3</div>
            </div>
            <img
              className="chevron-down-icon20"
              alt=""
              src="/chevrondown1.svg"
            />
          </div>
          <div className="list34" onClick={onListContainer1Click}>
            <img className="smart-home-icon3" alt="" src="/shoppingcart.svg" />
            <div className="id6">Transactions</div>
            <img
              className="chevron-down-icon20"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list34" onClick={onListContainer2Click}>
            <img className="smart-home-icon3" alt="" src="/users.svg" />
            <div className="id6">Customers</div>
            <img
              className="chevron-down-icon20"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list34" onClick={onListContainer3Click}>
            <img className="primesend-icon3" alt="" src="/primesend.svg" />
            <div className="id6">Posts Requests</div>
            <img
              className="chevron-down-icon20"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section10">
          <div className="main-menu3">Categories</div>
        </div>
        <div className="pages6">
          <div className="list38">
            <img className="smart-home-icon3" alt="" src="/circleplus.svg" />
            <div className="id6">Add Categories</div>
            <img
              className="chevron-down-icon20"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list39">
            <img className="smart-home-icon3" alt="" src="/box1.svg" />
            <div className="id6">Categories List</div>
            <img
              className="chevron-down-icon20"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section11">
          <div className="main-menu3">ADMIN</div>
        </div>
        <div className="pages6">
          <div className="list34" onClick={onListContainer4Click}>
            <img className="smart-home-icon3" alt="" src="/usercircle.svg" />
            <div className="id6">View Profile</div>
            <div className="badge6">
              <div className="div128">4</div>
            </div>
            <img
              className="chevron-down-icon20"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list38">
            <img className="smart-home-icon3" alt="" src="/settings.svg" />
            <div className="id6">Admin Roles</div>
            <img
              className="chevron-down-icon20"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
