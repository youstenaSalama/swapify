import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCategoryError.css";

const AddCategoryError: FunctionComponent = () => {
  const navigate = useNavigate();

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

  const onBtnsContainerClick = useCallback(() => {
    navigate("/add-category");
  }, [navigate]);

  return (
    <div className="add-category-error">
      <div className="form18">
        <div className="form19">
          <div className="text126">Search...</div>
          <img
            className="mingcutesearch-line-icon14"
            alt=""
            src="/mingcutesearchline2.svg"
          />
        </div>
      </div>
      <div className="dropdown28">
        <div className="dropdown29">
          <div className="text127">Add Category</div>
          <img className="phplus-bold-icon4" alt="" src="/phplusbold.svg" />
        </div>
      </div>
      <div className="navbar4">
        <div className="title4">
          <div className="categories9">Categories</div>
        </div>
        <div className="search-bar4">
          <img
            className="mingcutesearch-line-icon14"
            alt=""
            src="/mingcutesearchline.svg"
          />
          <div className="search4">Search</div>
        </div>
        <div className="action9">
          <div className="admin-notification4">
            <img
              className="vuesaxboldnotification-icon5"
              alt=""
              src="/vuesaxboldnotification1.svg"
            />
            <div className="notification-number5">
              <div className="notification-number-child3" />
              <div className="div130">1</div>
            </div>
          </div>
          <img className="avatar-icon4" alt="" src="/avatar1@2x.png" />
        </div>
      </div>
      <div className="table16">
        <div className="table-header-row16">
          <div className="table-cell547">
            <div className="id7">ID</div>
          </div>
          <div className="table-cell547">
            <div className="id7">Category name</div>
          </div>
          <div className="table-cell547">
            <div className="id7">Number of Items</div>
          </div>
          <div className="table-cell547">
            <div className="id7">Created</div>
          </div>
          <div className="table-cell547">
            <div className="id7">Action</div>
          </div>
        </div>
        <div className="table-row78">
          <div className="table-cell552">
            <div className="categories9">-</div>
          </div>
          <div className="table-cell553">
            <div className="categories9">Enter name</div>
          </div>
          <div className="table-cell554">
            <div className="div132">-</div>
          </div>
          <div className="table-cell554">
            <div className="div132">-</div>
          </div>
          <div className="table-cell556">
            <div className="btn1">
              <div className="login1">Add Category</div>
            </div>
          </div>
        </div>
        <div className="table-row79">
          <div className="table-cell557">
            <div className="categories9">#6548</div>
          </div>
          <div className="table-cell558">
            <div className="categories9">Electronics</div>
          </div>
          <div className="table-cell559">
            <div className="div132">150</div>
          </div>
          <div className="table-cell559">
            <div className="div132">6 April 2023</div>
          </div>
          <div className="table-cell561">
            <img
              className="trash-icon43"
              alt=""
              src="/trash2.svg"
              onClick={onTrashIconClick}
            />
          </div>
        </div>
        <div className="table-row79">
          <div className="table-cell557">
            <div className="categories9">#6548</div>
          </div>
          <div className="table-cell558">
            <div className="categories9">Makeup</div>
          </div>
          <div className="table-cell559">
            <div className="div132">200</div>
          </div>
          <div className="table-cell559">
            <div className="div132">6 April 2023</div>
          </div>
          <div className="table-cell561">
            <img className="trash-icon44" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row79">
          <div className="table-cell557">
            <div className="categories9">#6548</div>
          </div>
          <div className="table-cell558">
            <div className="categories9">Clothes</div>
          </div>
          <div className="table-cell559">
            <div className="div132">500</div>
          </div>
          <div className="table-cell559">
            <div className="div132">6 April 2023</div>
          </div>
          <div className="table-cell561">
            <img className="trash-icon44" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row79">
          <div className="table-cell557">
            <div className="categories9">#6548</div>
          </div>
          <div className="table-cell558">
            <div className="categories9">Sports</div>
          </div>
          <div className="table-cell559">
            <div className="div132">657</div>
          </div>
          <div className="table-cell559">
            <div className="div132">6 April 2023</div>
          </div>
          <div className="table-cell561">
            <img className="trash-icon44" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row79">
          <div className="table-cell557">
            <div className="categories9">#6548</div>
          </div>
          <div className="table-cell558">
            <div className="categories9">Furniture</div>
          </div>
          <div className="table-cell559">
            <div className="div132">348</div>
          </div>
          <div className="table-cell559">
            <div className="div132">6 April 2023</div>
          </div>
          <div className="table-cell561">
            <img className="trash-icon44" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row79">
          <div className="table-cell557">
            <div className="categories9">#6548</div>
          </div>
          <div className="table-cell558">
            <div className="categories9">Kitchen</div>
          </div>
          <div className="table-cell559">
            <div className="div132">629</div>
          </div>
          <div className="table-cell559">
            <div className="div132">6 April 2023</div>
          </div>
          <div className="table-cell561">
            <img className="trash-icon44" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row79">
          <div className="table-cell557">
            <div className="categories9">#6548</div>
          </div>
          <div className="table-cell558">
            <div className="categories9">Skin Care</div>
          </div>
          <div className="table-cell559">
            <div className="div132">185</div>
          </div>
          <div className="table-cell559">
            <div className="div132">6 April 2023</div>
          </div>
          <div className="table-cell561">
            <img className="trash-icon44" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row79">
          <div className="table-cell557">
            <div className="categories9">#6548</div>
          </div>
          <div className="table-cell558">
            <div className="categories9">Body Care</div>
          </div>
          <div className="table-cell559">
            <div className="div132">374</div>
          </div>
          <div className="table-cell559">
            <div className="div132">6 April 2023</div>
          </div>
          <div className="table-cell561">
            <img className="trash-icon44" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row87">
          <div className="showing-parent2">
            <div className="text127">Showing</div>
            <div className="dropdown30">
              <div className="dropdown31">
                <div className="text127">10</div>
                <img
                  className="chevron-down-icon21"
                  alt=""
                  src="/chevrondown3.svg"
                />
              </div>
            </div>
            <div className="text127">of 50</div>
          </div>
          <div className="pagination5">
            <div className="pagination-text35">
              <img
                className="chevron-down-icon21"
                alt=""
                src="/chevronleft.svg"
              />
            </div>
            <div className="pagination-text36">
              <div className="text129">1</div>
            </div>
            <div className="pagination-text35">
              <div className="text129">2</div>
            </div>
            <div className="pagination-text35">
              <div className="text129">3</div>
            </div>
            <div className="pagination-text35">
              <div className="text129">4</div>
            </div>
            <div className="pagination-text35">
              <div className="text129">5</div>
            </div>
            <div className="pagination-text41">
              <img
                className="chevron-down-icon21"
                alt=""
                src="/chevronright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="menu4">
        <div className="logo4">
          <img className="logo-icon4" alt="" src="/logo1.svg" />
          <img className="trash-icon44" alt="" src="/indentdecrease.svg" />
        </div>
        <div className="section12">
          <div className="main-menu4">MAIN MENU</div>
        </div>
        <div className="pages8">
          <div className="list42" onClick={onListContainerClick}>
            <img className="smart-home-icon4" alt="" src="/smarthome1.svg" />
            <div className="id7">Dashboard</div>
            <div className="badge8">
              <div className="div150">3</div>
            </div>
            <img
              className="chevron-down-icon22"
              alt=""
              src="/chevrondown1.svg"
            />
          </div>
          <div className="list42" onClick={onListContainer1Click}>
            <img className="smart-home-icon4" alt="" src="/shoppingcart.svg" />
            <div className="id7">Transactions</div>
            <img
              className="chevron-down-icon22"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list42" onClick={onListContainer2Click}>
            <img className="smart-home-icon4" alt="" src="/users.svg" />
            <div className="id7">Customers</div>
            <img
              className="chevron-down-icon22"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list42" onClick={onListContainer3Click}>
            <img className="primesend-icon4" alt="" src="/primesend.svg" />
            <div className="id7">Posts Requests</div>
            <img
              className="chevron-down-icon22"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section13">
          <div className="main-menu4">Categories</div>
        </div>
        <div className="pages8">
          <div className="list46">
            <img className="smart-home-icon4" alt="" src="/circleplus.svg" />
            <div className="id7">Add Categories</div>
            <img
              className="chevron-down-icon22"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list47">
            <img className="smart-home-icon4" alt="" src="/box1.svg" />
            <div className="id7">Categories List</div>
            <img
              className="chevron-down-icon22"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section14">
          <div className="main-menu4">ADMIN</div>
        </div>
        <div className="pages8">
          <div className="list48">
            <img className="smart-home-icon4" alt="" src="/usercircle.svg" />
            <div className="id7">View Profile</div>
            <div className="badge8">
              <div className="div150">4</div>
            </div>
            <img
              className="chevron-down-icon22"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list46">
            <img className="smart-home-icon4" alt="" src="/settings.svg" />
            <div className="id7">Admin Roles</div>
            <img
              className="chevron-down-icon22"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
      <div className="isolation2" />
      <div className="delete-msg1">
        <img className="uilx-icon" alt="" src="/uilx.svg" />
        <div className="sure-msg2">
          <div className="you-should-write">
            You should write category name then you can add category...
          </div>
        </div>
        <div className="btns1" onClick={onBtnsContainerClick}>
          <div className="btn2">
            <div className="login1">OK</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryError;
