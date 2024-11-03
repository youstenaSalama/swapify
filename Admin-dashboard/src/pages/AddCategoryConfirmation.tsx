import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCategoryConfirmation.css";

const AddCategoryConfirmation: FunctionComponent = () => {
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

  return (
    <div className="add-category-confirmation">
      <div className="form20">
        <div className="form21">
          <div className="text134">Search...</div>
          <img
            className="mingcutesearch-line-icon16"
            alt=""
            src="/mingcutesearchline2.svg"
          />
        </div>
      </div>
      <div className="dropdown32">
        <div className="dropdown33">
          <div className="text135">Add Category</div>
          <img className="phplus-bold-icon5" alt="" src="/phplusbold.svg" />
        </div>
      </div>
      <div className="navbar5">
        <div className="title5">
          <div className="categories11">Categories</div>
        </div>
        <div className="search-bar5">
          <img
            className="mingcutesearch-line-icon16"
            alt=""
            src="/mingcutesearchline.svg"
          />
          <div className="search5">Search</div>
        </div>
        <div className="action11">
          <div className="admin-notification5">
            <img
              className="vuesaxboldnotification-icon6"
              alt=""
              src="/vuesaxboldnotification1.svg"
            />
            <div className="notification-number6">
              <div className="notification-number-child4" />
              <div className="div152">1</div>
            </div>
          </div>
          <img className="avatar-icon5" alt="" src="/avatar1@2x.png" />
        </div>
      </div>
      <div className="table17">
        <div className="table-header-row17">
          <div className="table-cell597">
            <div className="id8">ID</div>
          </div>
          <div className="table-cell597">
            <div className="id8">Category name</div>
          </div>
          <div className="table-cell597">
            <div className="id8">Number of Items</div>
          </div>
          <div className="table-cell597">
            <div className="id8">Created</div>
          </div>
          <div className="table-cell597">
            <div className="id8">Action</div>
          </div>
        </div>
        <div className="table-row88">
          <div className="table-cell602">
            <div className="categories11">-</div>
          </div>
          <div className="table-cell603">
            <div className="categories11">Enter name</div>
          </div>
          <div className="table-cell604">
            <div className="div154">-</div>
          </div>
          <div className="table-cell604">
            <div className="div154">-</div>
          </div>
          <div className="table-cell606">
            <div className="btn3">
              <div className="login3">Add Category</div>
            </div>
          </div>
        </div>
        <div className="table-row89">
          <div className="table-cell607">
            <div className="categories11">#6548</div>
          </div>
          <div className="table-cell608">
            <div className="categories11">Electronics</div>
          </div>
          <div className="table-cell609">
            <div className="div154">150</div>
          </div>
          <div className="table-cell609">
            <div className="div154">6 April 2023</div>
          </div>
          <div className="table-cell611">
            <img
              className="trash-icon51"
              alt=""
              src="/trash2.svg"
              onClick={onTrashIconClick}
            />
          </div>
        </div>
        <div className="table-row89">
          <div className="table-cell607">
            <div className="categories11">#6548</div>
          </div>
          <div className="table-cell608">
            <div className="categories11">Makeup</div>
          </div>
          <div className="table-cell609">
            <div className="div154">200</div>
          </div>
          <div className="table-cell609">
            <div className="div154">6 April 2023</div>
          </div>
          <div className="table-cell611">
            <img className="trash-icon52" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row89">
          <div className="table-cell607">
            <div className="categories11">#6548</div>
          </div>
          <div className="table-cell608">
            <div className="categories11">Clothes</div>
          </div>
          <div className="table-cell609">
            <div className="div154">500</div>
          </div>
          <div className="table-cell609">
            <div className="div154">6 April 2023</div>
          </div>
          <div className="table-cell611">
            <img className="trash-icon52" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row89">
          <div className="table-cell607">
            <div className="categories11">#6548</div>
          </div>
          <div className="table-cell608">
            <div className="categories11">Sports</div>
          </div>
          <div className="table-cell609">
            <div className="div154">657</div>
          </div>
          <div className="table-cell609">
            <div className="div154">6 April 2023</div>
          </div>
          <div className="table-cell611">
            <img className="trash-icon52" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row89">
          <div className="table-cell607">
            <div className="categories11">#6548</div>
          </div>
          <div className="table-cell608">
            <div className="categories11">Furniture</div>
          </div>
          <div className="table-cell609">
            <div className="div154">348</div>
          </div>
          <div className="table-cell609">
            <div className="div154">6 April 2023</div>
          </div>
          <div className="table-cell611">
            <img className="trash-icon52" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row89">
          <div className="table-cell607">
            <div className="categories11">#6548</div>
          </div>
          <div className="table-cell608">
            <div className="categories11">Kitchen</div>
          </div>
          <div className="table-cell609">
            <div className="div154">629</div>
          </div>
          <div className="table-cell609">
            <div className="div154">6 April 2023</div>
          </div>
          <div className="table-cell611">
            <img className="trash-icon52" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row89">
          <div className="table-cell607">
            <div className="categories11">#6548</div>
          </div>
          <div className="table-cell608">
            <div className="categories11">Skin Care</div>
          </div>
          <div className="table-cell609">
            <div className="div154">185</div>
          </div>
          <div className="table-cell609">
            <div className="div154">6 April 2023</div>
          </div>
          <div className="table-cell611">
            <img className="trash-icon52" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row89">
          <div className="table-cell607">
            <div className="categories11">#6548</div>
          </div>
          <div className="table-cell608">
            <div className="categories11">Body Care</div>
          </div>
          <div className="table-cell609">
            <div className="div154">374</div>
          </div>
          <div className="table-cell609">
            <div className="div154">6 April 2023</div>
          </div>
          <div className="table-cell611">
            <img className="trash-icon52" alt="" src="/trash2.svg" />
          </div>
        </div>
        <div className="table-row97">
          <div className="showing-parent3">
            <div className="text135">Showing</div>
            <div className="dropdown34">
              <div className="dropdown35">
                <div className="text135">10</div>
                <img
                  className="chevron-down-icon23"
                  alt=""
                  src="/chevrondown3.svg"
                />
              </div>
            </div>
            <div className="text135">of 50</div>
          </div>
          <div className="pagination6">
            <div className="pagination-text42">
              <img
                className="chevron-down-icon23"
                alt=""
                src="/chevronleft.svg"
              />
            </div>
            <div className="pagination-text43">
              <div className="text137">1</div>
            </div>
            <div className="pagination-text42">
              <div className="text137">2</div>
            </div>
            <div className="pagination-text42">
              <div className="text137">3</div>
            </div>
            <div className="pagination-text42">
              <div className="text137">4</div>
            </div>
            <div className="pagination-text42">
              <div className="text137">5</div>
            </div>
            <div className="pagination-text48">
              <img
                className="chevron-down-icon23"
                alt=""
                src="/chevronright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="menu5">
        <div className="logo5">
          <img className="logo-icon5" alt="" src="/logo1.svg" />
          <img className="trash-icon52" alt="" src="/indentdecrease.svg" />
        </div>
        <div className="section15">
          <div className="main-menu5">MAIN MENU</div>
        </div>
        <div className="pages10">
          <div className="list50" onClick={onListContainerClick}>
            <img className="smart-home-icon5" alt="" src="/smarthome1.svg" />
            <div className="id8">Dashboard</div>
            <div className="badge10">
              <div className="div172">3</div>
            </div>
            <img
              className="chevron-down-icon24"
              alt=""
              src="/chevrondown1.svg"
            />
          </div>
          <div className="list50" onClick={onListContainer1Click}>
            <img className="smart-home-icon5" alt="" src="/shoppingcart.svg" />
            <div className="id8">Transactions</div>
            <img
              className="chevron-down-icon24"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list50" onClick={onListContainer2Click}>
            <img className="smart-home-icon5" alt="" src="/users.svg" />
            <div className="id8">Customers</div>
            <img
              className="chevron-down-icon24"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list50" onClick={onListContainer3Click}>
            <img className="primesend-icon5" alt="" src="/primesend.svg" />
            <div className="id8">Posts Requests</div>
            <img
              className="chevron-down-icon24"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section16">
          <div className="main-menu5">Categories</div>
        </div>
        <div className="pages10">
          <div className="list54">
            <img className="smart-home-icon5" alt="" src="/circleplus.svg" />
            <div className="id8">Add Categories</div>
            <img
              className="chevron-down-icon24"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list55">
            <img className="smart-home-icon5" alt="" src="/box1.svg" />
            <div className="id8">Categories List</div>
            <img
              className="chevron-down-icon24"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        <div className="section17">
          <div className="main-menu5">ADMIN</div>
        </div>
        <div className="pages10">
          <div className="list56">
            <img className="smart-home-icon5" alt="" src="/usercircle.svg" />
            <div className="id8">View Profile</div>
            <div className="badge10">
              <div className="div172">4</div>
            </div>
            <img
              className="chevron-down-icon24"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="list54">
            <img className="smart-home-icon5" alt="" src="/settings.svg" />
            <div className="id8">Admin Roles</div>
            <img
              className="chevron-down-icon24"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
      <div className="isolation3" />
      <div className="delete-msg2">
        <img
          className="icon-parkcheck-correct1"
          alt=""
          src="/iconparkcheckcorrect.svg"
        />
        <div className="sure-msg3">
          <div className="category-added-successfully">
            Category added successfully
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryConfirmation;
