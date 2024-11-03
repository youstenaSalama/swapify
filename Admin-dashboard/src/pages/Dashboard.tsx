import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Body11 from "../components/Body1";
import Body1 from "../components/Body";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import "./Dashboard.css";

const Dashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListContainer1Click = useCallback(() => {
    navigate("/transactions");
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
    <div className="dashboard">
      <div className="total-transactions">
        <div className="total-transations-section">
          <div className="total-transations">
            <div className="cash">Total Transactions</div>
            <div className="last-7-days">Last 7 days</div>
          </div>
          <div className="cost">
            <div className="cash">$350K</div>
          </div>
        </div>
        <div className="chart">
          <div className="chart-line">
            <div className="sales">
              <div className="sales-child" />
              <div className="sales1">Transactions</div>
            </div>
            <img className="chart-icon" alt="" src="/chart.svg" />
          </div>
          <div className="days-table">
            <div className="mon">Mon</div>
            <div className="mon">tue</div>
            <div className="mon">wed</div>
            <div className="mon">thu</div>
            <div className="mon">fri</div>
            <div className="mon">sat</div>
            <div className="mon">sun</div>
          </div>
        </div>
      </div>
      <div className="raw-4">
        <div className="recent-posts-requests-card">
          <div className="header">
            <div className="recent-posts-requests">
              <div className="cash">Recent Posts Requests</div>
            </div>
            <div className="more-details">More Details</div>
          </div>
          <Body11 />
        </div>
        <div className="card">
          <div className="header1">
            <div className="text5">
              <div className="cash">Recent Users</div>
              <div className="text7">Total 10.4k Visitors</div>
            </div>
          </div>
          <Body1 />
        </div>
      </div>
      <div className="raw-2">
        <div className="recent-posts-requests-card">
          <div className="header2">
            <div className="text8">Reports</div>
            <div className="text9">Last 7 Days</div>
          </div>
          <div className="body1">
            <div className="tabs">
              <div className="tab">
                <b className="paypal">24k</b>
                <div className="paypal1">Customers</div>
              </div>
              <div className="tab1">
                <b className="paypal">3.5k</b>
                <div className="paypal1">Posts</div>
              </div>
              <div className="tab1">
                <b className="paypal">350k</b>
                <div className="paypal1">Transactions</div>
              </div>
            </div>
            <div className="chart1">
              <div className="chart2">
                <div className="text10">
                  <div className="text11">50k</div>
                  <div className="text12">40k</div>
                  <div className="text12">30k</div>
                  <div className="text12">20k</div>
                  <div className="text12">10k</div>
                  <div className="text12">0k</div>
                </div>
                <img className="chart-icon1" alt="" src="/chart1.svg" />
              </div>
              <div className="line">
                <div className="line1" />
              </div>
              <div className="text17">
                <div className="text12">Mon</div>
                <div className="text12">Tue</div>
                <div className="text12">Wed</div>
                <div className="text12">Thu</div>
                <div className="text12">Fri</div>
                <div className="text12">Sat</div>
                <div className="text12">Sun</div>
              </div>
            </div>
          </div>
        </div>
        <div className="users-parent">
          <div className="users">
            <div className="cash">Users in last 7 days</div>
            <div className="cash1">16.5K</div>
            <div className="label">Users per day</div>
          </div>
          <div className="bargraph">
            <div className="bargraph-child" />
            <div className="bargraph-item" />
            <div className="bargraph-inner" />
            <div className="rectangle-div" />
            <div className="bargraph-child1" />
            <div className="bargraph-inner" />
            <div className="bargraph-item" />
            <div className="bargraph-child4" />
            <div className="bargraph-child5" />
            <div className="bargraph-child6" />
            <div className="bargraph-inner" />
            <div className="rectangle-div" />
            <div className="bargraph-child1" />
            <div className="bargraph-child10" />
            <div className="bargraph-child11" />
            <div className="bargraph-child12" />
            <div className="bargraph-child6" />
            <div className="bargraph-child1" />
            <div className="bargraph-inner" />
            <div className="bargraph-child5" />
            <div className="bargraph-inner" />
            <div className="bargraph-child18" />
            <div className="bargraph-child1" />
            <div className="bargraph-child" />
            <div className="bargraph-child6" />
            <div className="bargraph-inner" />
            <div className="bargraph-child5" />
            <div className="bargraph-child12" />
            <div className="bargraph-child" />
            <div className="bargraph-child18" />
            <div className="bargraph-inner" />
            <div className="bargraph-child6" />
            <div className="bargraph-child5" />
            <div className="bargraph-child6" />
            <div className="bargraph-child" />
            <div className="bargraph-child32" />
            <div className="bargraph-child11" />
            <div className="bargraph-child18" />
            <div className="bargraph-child6" />
            <div className="bargraph-child" />
            <div className="bargraph-item" />
            <div className="bargraph-child10" />
            <div className="bargraph-child32" />
            <div className="bargraph-inner" />
            <div className="bargraph-item" />
            <div className="bargraph-child6" />
            <div className="bargraph-child43" />
          </div>
        </div>
      </div>
      <div className="raw-5">
        <div className="card1">
          <div className="header3">
            <div className="text25">Today Transactions</div>
          </div>
          <div className="body2">
            <div className="transactions-data">
              <div className="data">
                <div className="cash">16.5K</div>
                <div className="text7">Orders Over Time</div>
              </div>
              <div className="frame-parent">
                <div className="material-symbolsarrow-downwar-parent">
                  <img
                    className="material-symbolsarrow-downwar-icon"
                    alt=""
                    src="/materialsymbolsarrowdownwardrounded@2x.png"
                  />
                  <div className="sales1">6%</div>
                </div>
                <div className="label2">vs last day</div>
              </div>
            </div>
            <div className="chart3">
              <img className="chart-child" alt="" src="/vector-6.svg" />
              <div className="text27">
                <div className="text28">12am</div>
                <div className="text28">8am</div>
                <div className="text28">4pm</div>
                <div className="text28">11pm</div>
              </div>
            </div>
          </div>
        </div>
        <div className="recent-posts-requests-card">
          <div className="header">
            <div className="recent-posts-requests">
              <div className="cash">Recent Posts</div>
            </div>
            <div className="more-details">More Details</div>
          </div>
          <div className="body3">
            <div className="deta-table-row">
              <div className="deta-table-cell">
                <div className="mon">ID</div>
                <div className="arrow">
                  <img
                    className="fichevron-up-icon"
                    alt=""
                    src="/fichevronup.svg"
                  />
                  <img
                    className="chevron-down-icon2"
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
              <div className="deta-table-cell1">
                <div className="mon">Customer</div>
                <div className="arrow1">
                  <img
                    className="fichevron-up-icon"
                    alt=""
                    src="/fichevronup1.svg"
                  />
                  <img
                    className="chevron-down-icon2"
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
              <div className="deta-table-cell">
                <div className="mon">Date</div>
                <div className="arrow1">
                  <img
                    className="fichevron-up-icon"
                    alt=""
                    src="/fichevronup1.svg"
                  />
                  <img
                    className="chevron-down-icon2"
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
              <div className="deta-table-cell3">
                <div className="mon">item</div>
              </div>
            </div>
            <div className="list">
              <div className="text35">#6548</div>
              <div className="text36">Joseph Wheeler</div>
              <div className="text37">16 April 2024</div>
              <div className="text38">Apple watch</div>
            </div>
            <div className="list">
              <div className="text35">#6548</div>
              <div className="text36">Joseph Wheeler</div>
              <div className="text37">16 April 2024</div>
              <div className="text38">Nike Air Jordan</div>
            </div>
            <div className="list">
              <div className="text35">#6548</div>
              <div className="text36">Joseph Wheeler</div>
              <div className="text37">16 April 2024</div>
              <div className="text38">Apple watch</div>
            </div>
            <div className="list">
              <div className="text35">#6548</div>
              <div className="text36">Joseph Wheeler</div>
              <div className="text37">16 April 2024</div>
              <div className="text38">Apple watch</div>
            </div>
            <div className="list">
              <div className="text35">#6548</div>
              <div className="text36">Joseph Wheeler</div>
              <div className="text37">16 April 2024</div>
              <div className="text38">Apple watch</div>
            </div>
          </div>
        </div>
      </div>
      <div className="raw-3">
        <div className="card">
          <div className="header5">
            <div className="cash">Top Selling Category</div>
            <div className="text7">Total 10.4k Visitors</div>
          </div>
          <div className="body4">
            <div className="big">
              <div className="big-child" />
              <div className="fashion-parent">
                <div className="fashion">Fashion</div>
                <b className="b">4.567</b>
                <div className="per-day">Per Day</div>
              </div>
            </div>
            <div className="medium">
              <div className="medium-child" />
              <div className="electronics-parent">
                <div className="fashion">Electronics</div>
                <b className="b">3.167</b>
                <div className="per-day">Per Day</div>
              </div>
            </div>
            <div className="small">
              <div className="small-child" />
              <div className="make-up-parent">
                <div className="fashion">Make-up</div>
                <b className="b">1.845</b>
                <div className="per-day">Per Day</div>
              </div>
            </div>
          </div>
        </div>
        <div className="recent-posts-requests-card">
          <div className="header">
            <div className="recent-posts-requests">
              <div className="cash">Last Transactions</div>
            </div>
            <div className="more-details">More Details</div>
          </div>
          <div className="body5">
            <div className="deta-table-row1">
              <div className="deta-table-cell">
                <div className="from">ID</div>
                <div className="arrow">
                  <img
                    className="fichevron-up-icon"
                    alt=""
                    src="/fichevronup.svg"
                  />
                  <img
                    className="chevron-down-icon2"
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
              <div className="deta-table-cell1">
                <div className="from">Date</div>
                <div className="arrow1">
                  <img
                    className="fichevron-up-icon"
                    alt=""
                    src="/fichevronup1.svg"
                  />
                  <img
                    className="chevron-down-icon2"
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
              <div className="deta-table-cell">
                <div className="from">from</div>
                <div className="arrow1">
                  <img
                    className="fichevron-up-icon"
                    alt=""
                    src="/fichevronup1.svg"
                  />
                  <img
                    className="chevron-down-icon2"
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
              <div className="deta-table-cell3">
                <div className="from">to</div>
              </div>
            </div>
            <div className="list">
              <div className="text60">#6548</div>
              <div className="text61">16 April 2024</div>
              <div className="joseph-wheeler">Joseph Wheeler</div>
              <div className="joseph-wheeler1">Joseph Wheeler</div>
            </div>
            <div className="list">
              <div className="text60">#6548</div>
              <div className="text61">16 April 2024</div>
              <div className="joseph-wheeler">Joseph Wheeler</div>
              <div className="joseph-wheeler1">Joseph Wheeler</div>
            </div>
            <div className="list">
              <div className="text60">#6548</div>
              <div className="text61">16 April 2024</div>
              <div className="joseph-wheeler">Joseph Wheeler</div>
              <div className="joseph-wheeler1">Joseph Wheeler</div>
            </div>
            <div className="list">
              <div className="text60">#6548</div>
              <div className="text61">16 April 2024</div>
              <div className="joseph-wheeler">Joseph Wheeler</div>
              <div className="joseph-wheeler1">Joseph Wheeler</div>
            </div>
            <div className="list">
              <div className="text60">#6548</div>
              <div className="text61">16 April 2024</div>
              <div className="joseph-wheeler">Joseph Wheeler</div>
              <div className="joseph-wheeler1">Joseph Wheeler</div>
            </div>
          </div>
        </div>
      </div>
      <Navbar dashboard="Dashboard" />
      <Menu
        smartHome="/smarthome.svg"
        shoppingCart="/shoppingcart.svg"
        users="/users.svg"
        onListContainer1Click={onListContainer1Click}
        onListContainer2Click={onListContainer2Click}
        onListContainer3Click={onListContainer3Click}
        onPagesContainer1Click={onPagesContainer1Click}
      />
    </div>
  );
};

export default Dashboard;
