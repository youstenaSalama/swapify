import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserInfoCard from "../components/UserInfoCard";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import "./CustomerDetailTransaction1.css";

const CustomerDetailTransaction1: FunctionComponent = () => {
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
    <div className="customer-detail-transaction1">
      <UserInfoCard />
      <div className="table1">
        <div className="table-header-row1">
          <div className="table-cell5">
            <div className="transaction-id">Transaction id</div>
          </div>
          <div className="table-cell5">
            <div className="created1">Created</div>
          </div>
          <div className="table-cell5">
            <div className="transaction-id">From</div>
          </div>
          <div className="table-cell5">
            <div className="transaction-id">item</div>
          </div>
          <div className="table-cell5">
            <div className="transaction-id">to</div>
          </div>
          <div className="table-cell5">
            <div className="transaction-id">item</div>
          </div>
          <div className="table-cell11">
            <img className="trash-icon" alt="" src="/trash.svg" />
          </div>
        </div>
        <div className="table-raw">
          <div className="table-row">
            <div className="table-cell12">
              <div className="text73">
                <div className="div1">#6548</div>
              </div>
            </div>
            <div className="table-cell13">
              <div className="min-ago">2 min ago</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Robert Fox</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Joseph Wheeler</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell18">
              <img className="trash-icon" alt="" src="/trash1.svg" />
              <img
                className="material-symbolsarrow-drop-do-icon"
                alt=""
                src="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
              />
            </div>
          </div>
          <div className="table2">
            <div className="table-header-row2">
              <div className="table-cell19">
                <div className="transaction-id">#</div>
              </div>
              <div className="table-cell20">
                <div className="product-1">Product #1</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">discription</div>
              </div>
              <div className="table-cell20">
                <div className="transaction-id">product #2</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">Discription</div>
              </div>
            </div>
            <div className="table-row1">
              <div className="table-cell26">
                <div className="div3">#6548</div>
              </div>
              <div className="table-cell27">
                <b className="apple-iphone-13">Apple iPhone 13</b>
              </div>
              <div className="table-cell28">
                <div className="div3">$999.29</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
              <div className="table-cell30">
                <div className="div3">Nike Air Jordan</div>
              </div>
              <div className="table-cell31">
                <div className="div3">$949.32</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #1</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #2</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
          </div>
        </div>
        <div className="table-raw">
          <div className="table-row">
            <div className="table-cell12">
              <div className="text73">
                <div className="div1">#6548</div>
              </div>
            </div>
            <div className="table-cell13">
              <div className="min-ago">2 min ago</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Robert Fox</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Joseph Wheeler</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell18">
              <img className="trash-icon" alt="" src="/trash1.svg" />
              <img
                className="material-symbolsarrow-drop-do-icon"
                alt=""
                src="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
              />
            </div>
          </div>
          <div className="table2">
            <div className="table-header-row2">
              <div className="table-cell19">
                <div className="transaction-id">#</div>
              </div>
              <div className="table-cell20">
                <div className="product-1">Product #1</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">discription</div>
              </div>
              <div className="table-cell20">
                <div className="transaction-id">product #2</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">Discription</div>
              </div>
            </div>
            <div className="table-row1">
              <div className="table-cell26">
                <div className="div3">#6548</div>
              </div>
              <div className="table-cell27">
                <b className="apple-iphone-13">Apple iPhone 13</b>
              </div>
              <div className="table-cell28">
                <div className="div3">$999.29</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
              <div className="table-cell30">
                <div className="div3">Nike Air Jordan</div>
              </div>
              <div className="table-cell31">
                <div className="div3">$949.32</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #1</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #2</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
          </div>
        </div>
        <div className="table-raw">
          <div className="table-row">
            <div className="table-cell12">
              <div className="text73">
                <div className="div1">#6548</div>
              </div>
            </div>
            <div className="table-cell13">
              <div className="min-ago">2 min ago</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Robert Fox</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Joseph Wheeler</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell18">
              <img className="trash-icon" alt="" src="/trash1.svg" />
              <img
                className="material-symbolsarrow-drop-do-icon"
                alt=""
                src="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
              />
            </div>
          </div>
          <div className="table2">
            <div className="table-header-row2">
              <div className="table-cell19">
                <div className="transaction-id">#</div>
              </div>
              <div className="table-cell20">
                <div className="product-1">Product #1</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">discription</div>
              </div>
              <div className="table-cell20">
                <div className="transaction-id">product #2</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">Discription</div>
              </div>
            </div>
            <div className="table-row1">
              <div className="table-cell26">
                <div className="div3">#6548</div>
              </div>
              <div className="table-cell27">
                <b className="apple-iphone-13">Apple iPhone 13</b>
              </div>
              <div className="table-cell28">
                <div className="div3">$999.29</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
              <div className="table-cell30">
                <div className="div3">Nike Air Jordan</div>
              </div>
              <div className="table-cell31">
                <div className="div3">$949.32</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #1</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #2</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
          </div>
        </div>
        <div className="table-raw">
          <div className="table-row">
            <div className="table-cell12">
              <div className="text73">
                <div className="div1">#6548</div>
              </div>
            </div>
            <div className="table-cell13">
              <div className="min-ago">2 min ago</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Robert Fox</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Joseph Wheeler</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell18">
              <img className="trash-icon" alt="" src="/trash1.svg" />
              <img
                className="material-symbolsarrow-drop-do-icon"
                alt=""
                src="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
              />
            </div>
          </div>
          <div className="table2">
            <div className="table-header-row2">
              <div className="table-cell19">
                <div className="transaction-id">#</div>
              </div>
              <div className="table-cell20">
                <div className="product-1">Product #1</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">discription</div>
              </div>
              <div className="table-cell20">
                <div className="transaction-id">product #2</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">Discription</div>
              </div>
            </div>
            <div className="table-row1">
              <div className="table-cell26">
                <div className="div3">#6548</div>
              </div>
              <div className="table-cell27">
                <b className="apple-iphone-13">Apple iPhone 13</b>
              </div>
              <div className="table-cell28">
                <div className="div3">$999.29</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
              <div className="table-cell30">
                <div className="div3">Nike Air Jordan</div>
              </div>
              <div className="table-cell31">
                <div className="div3">$949.32</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #1</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #2</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
          </div>
        </div>
        <div className="table-raw">
          <div className="table-row">
            <div className="table-cell12">
              <div className="text73">
                <div className="div1">#6548</div>
              </div>
            </div>
            <div className="table-cell13">
              <div className="min-ago">2 min ago</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Robert Fox</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Joseph Wheeler</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell18">
              <img className="trash-icon" alt="" src="/trash1.svg" />
              <img
                className="material-symbolsarrow-drop-do-icon"
                alt=""
                src="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
              />
            </div>
          </div>
          <div className="table2">
            <div className="table-header-row2">
              <div className="table-cell19">
                <div className="transaction-id">#</div>
              </div>
              <div className="table-cell20">
                <div className="product-1">Product #1</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">discription</div>
              </div>
              <div className="table-cell20">
                <div className="transaction-id">product #2</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">Discription</div>
              </div>
            </div>
            <div className="table-row1">
              <div className="table-cell26">
                <div className="div3">#6548</div>
              </div>
              <div className="table-cell27">
                <b className="apple-iphone-13">Apple iPhone 13</b>
              </div>
              <div className="table-cell28">
                <div className="div3">$999.29</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
              <div className="table-cell30">
                <div className="div3">Nike Air Jordan</div>
              </div>
              <div className="table-cell31">
                <div className="div3">$949.32</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #1</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #2</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
          </div>
        </div>
        <div className="table-raw">
          <div className="table-row">
            <div className="table-cell12">
              <div className="text73">
                <div className="div1">#6548</div>
              </div>
            </div>
            <div className="table-cell13">
              <div className="min-ago">2 min ago</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Robert Fox</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Joseph Wheeler</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell18">
              <img className="trash-icon" alt="" src="/trash1.svg" />
              <img
                className="material-symbolsarrow-drop-do-icon"
                alt=""
                src="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
              />
            </div>
          </div>
          <div className="table2">
            <div className="table-header-row2">
              <div className="table-cell19">
                <div className="transaction-id">#</div>
              </div>
              <div className="table-cell20">
                <div className="product-1">Product #1</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">discription</div>
              </div>
              <div className="table-cell20">
                <div className="transaction-id">product #2</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">Discription</div>
              </div>
            </div>
            <div className="table-row1">
              <div className="table-cell26">
                <div className="div3">#6548</div>
              </div>
              <div className="table-cell27">
                <b className="apple-iphone-13">Apple iPhone 13</b>
              </div>
              <div className="table-cell28">
                <div className="div3">$999.29</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
              <div className="table-cell30">
                <div className="div3">Nike Air Jordan</div>
              </div>
              <div className="table-cell31">
                <div className="div3">$949.32</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #1</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #2</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
          </div>
        </div>
        <div className="table-raw">
          <div className="table-row">
            <div className="table-cell12">
              <div className="text73">
                <div className="div1">#6548</div>
              </div>
            </div>
            <div className="table-cell13">
              <div className="min-ago">2 min ago</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Robert Fox</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Joseph Wheeler</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell18">
              <img className="trash-icon" alt="" src="/trash1.svg" />
              <img
                className="material-symbolsarrow-drop-do-icon"
                alt=""
                src="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
              />
            </div>
          </div>
          <div className="table2">
            <div className="table-header-row2">
              <div className="table-cell19">
                <div className="transaction-id">#</div>
              </div>
              <div className="table-cell20">
                <div className="product-1">Product #1</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">discription</div>
              </div>
              <div className="table-cell20">
                <div className="transaction-id">product #2</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">Discription</div>
              </div>
            </div>
            <div className="table-row1">
              <div className="table-cell26">
                <div className="div3">#6548</div>
              </div>
              <div className="table-cell27">
                <b className="apple-iphone-13">Apple iPhone 13</b>
              </div>
              <div className="table-cell28">
                <div className="div3">$999.29</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
              <div className="table-cell30">
                <div className="div3">Nike Air Jordan</div>
              </div>
              <div className="table-cell31">
                <div className="div3">$949.32</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #1</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #2</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
          </div>
        </div>
        <div className="table-raw">
          <div className="table-row">
            <div className="table-cell12">
              <div className="text73">
                <div className="div1">#6548</div>
              </div>
            </div>
            <div className="table-cell13">
              <div className="min-ago">2 min ago</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Robert Fox</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Joseph Wheeler</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell18">
              <img className="trash-icon" alt="" src="/trash1.svg" />
              <img
                className="material-symbolsarrow-drop-do-icon"
                alt=""
                src="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
              />
            </div>
          </div>
          <div className="table2">
            <div className="table-header-row2">
              <div className="table-cell19">
                <div className="transaction-id">#</div>
              </div>
              <div className="table-cell20">
                <div className="product-1">Product #1</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">discription</div>
              </div>
              <div className="table-cell20">
                <div className="transaction-id">product #2</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">Discription</div>
              </div>
            </div>
            <div className="table-row1">
              <div className="table-cell26">
                <div className="div3">#6548</div>
              </div>
              <div className="table-cell27">
                <b className="apple-iphone-13">Apple iPhone 13</b>
              </div>
              <div className="table-cell28">
                <div className="div3">$999.29</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
              <div className="table-cell30">
                <div className="div3">Nike Air Jordan</div>
              </div>
              <div className="table-cell31">
                <div className="div3">$949.32</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #1</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #2</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
          </div>
        </div>
        <div className="table-raw">
          <div className="table-row">
            <div className="table-cell12">
              <div className="text73">
                <div className="div1">#6548</div>
              </div>
            </div>
            <div className="table-cell13">
              <div className="min-ago">2 min ago</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Robert Fox</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Joseph Wheeler</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell18">
              <img className="trash-icon" alt="" src="/trash1.svg" />
              <img
                className="material-symbolsarrow-drop-do-icon"
                alt=""
                src="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
              />
            </div>
          </div>
          <div className="table2">
            <div className="table-header-row2">
              <div className="table-cell19">
                <div className="transaction-id">#</div>
              </div>
              <div className="table-cell20">
                <div className="product-1">Product #1</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">discription</div>
              </div>
              <div className="table-cell20">
                <div className="transaction-id">product #2</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">Discription</div>
              </div>
            </div>
            <div className="table-row1">
              <div className="table-cell26">
                <div className="div3">#6548</div>
              </div>
              <div className="table-cell27">
                <b className="apple-iphone-13">Apple iPhone 13</b>
              </div>
              <div className="table-cell28">
                <div className="div3">$999.29</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
              <div className="table-cell30">
                <div className="div3">Nike Air Jordan</div>
              </div>
              <div className="table-cell31">
                <div className="div3">$949.32</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #1</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #2</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
          </div>
        </div>
        <div className="table-raw">
          <div className="table-row">
            <div className="table-cell12">
              <div className="text73">
                <div className="div1">#6548</div>
              </div>
            </div>
            <div className="table-cell13">
              <div className="min-ago">2 min ago</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Robert Fox</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell14">
              <div className="min-ago">Joseph Wheeler</div>
            </div>
            <div className="table-cell15">
              <div className="nike-air-jordan">Nike Air Jordan</div>
            </div>
            <div className="table-cell18">
              <img className="trash-icon" alt="" src="/trash1.svg" />
              <img
                className="material-symbolsarrow-drop-do-icon"
                alt=""
                src="/materialsymbolsarrowdropdowncircleoutlinerounded.svg"
              />
            </div>
          </div>
          <div className="table2">
            <div className="table-header-row2">
              <div className="table-cell19">
                <div className="transaction-id">#</div>
              </div>
              <div className="table-cell20">
                <div className="product-1">Product #1</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">discription</div>
              </div>
              <div className="table-cell20">
                <div className="transaction-id">product #2</div>
              </div>
              <div className="table-cell21">
                <div className="transaction-id">Price</div>
              </div>
              <div className="table-cell22">
                <div className="transaction-id">Discription</div>
              </div>
            </div>
            <div className="table-row1">
              <div className="table-cell26">
                <div className="div3">#6548</div>
              </div>
              <div className="table-cell27">
                <b className="apple-iphone-13">Apple iPhone 13</b>
              </div>
              <div className="table-cell28">
                <div className="div3">$999.29</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
              <div className="table-cell30">
                <div className="div3">Nike Air Jordan</div>
              </div>
              <div className="table-cell31">
                <div className="div3">$949.32</div>
              </div>
              <div className="table-cell29">
                <div className="div3">x1</div>
              </div>
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #1</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
            <div className="table-row2">
              <div className="table-cell26">
                <div className="disc-1">Disc #2</div>
              </div>
              <div className="table-cell34">
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id tempus felis. Ut non venenatis erat. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Nunc porta diam et nibh suscipit ultrices.
                  Nullam hendrerit neque ac lorem ultricies pulvinar. Nullam
                  consequat justo at erat elementum, laoreet convallis ex
                  condimentum. Aliquam egestas vitae nunc id blandit.
                </div>
              </div>
              <div className="table-cell35" />
              <div className="table-cell36" />
              <div className="table-cell37" />
              <div className="table-cell38" />
              <div className="table-cell36" />
            </div>
          </div>
        </div>
        <div className="table-row40">
          <div className="showing-parent">
            <div className="showing">Showing</div>
            <div className="dropdown4">
              <div className="dropdown5">
                <div className="showing">10</div>
                <img
                  className="chevron-left-icon"
                  alt=""
                  src="/chevrondown3.svg"
                />
              </div>
            </div>
            <div className="showing">of 50</div>
          </div>
          <div className="pagination">
            <div className="pagination-text">
              <img
                className="chevron-left-icon"
                alt=""
                src="/chevronleft.svg"
              />
            </div>
            <div className="pagination-text1">
              <div className="text84">1</div>
            </div>
            <div className="pagination-text">
              <div className="text84">2</div>
            </div>
            <div className="pagination-text">
              <div className="text84">3</div>
            </div>
            <div className="pagination-text">
              <div className="text84">4</div>
            </div>
            <div className="pagination-text">
              <div className="text84">5</div>
            </div>
            <div className="pagination-text6">
              <img
                className="chevron-left-icon"
                alt=""
                src="/chevronright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="form6">
        <div className="form7">
          <div className="apple-iphone-13">Search by Request id</div>
          <img
            className="mingcutesearch-line-icon4"
            alt=""
            src="/mingcutesearchline2.svg"
          />
        </div>
      </div>
      <div className="dropdown6">
        <div className="dropdown7">
          <div className="showing">Filter by date range</div>
          <img className="chevron-left-icon" alt="" src="/chevrondown2.svg" />
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

export default CustomerDetailTransaction1;
