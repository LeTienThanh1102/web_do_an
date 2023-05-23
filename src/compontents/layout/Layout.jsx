import About from "../about/About";
import Main from "../about/main";
import Feed from "../feedback/Feed";
import Food from "../food/Food";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Local from "../local/Local";
import Product from "../product/Product";
import SideBar from "../sidebar/SideBar";
import Order from "../order/Order";
import "./layout.scss";
import { useState } from "react";
import Join from "../join/Join";
import { useSelector } from "react-redux";
function Layout() {
  const [order, setOrder] = useState(false);
  const [infor, setInfor] = useState();
  const post = useSelector((state) => state.post.posts);
  return (
      <div>
        <Header />
        <div className="body">
          <SideBar />
          <Local />
          {post.length>1 ?<Join setOrder={setOrder} setInfor={setInfor} /> : ''}
          <Product setOrder={setOrder} setInfor={setInfor} />
          <Main />
          <Food setOrder={setOrder} setInfor={setInfor} />
          
          <Feed />
        </div>
        <div className="footer">
          <Footer />
        </div>
        <Order visiable={order} infor={infor} setOrder={setOrder} />
      </div>
   
  );
}

export default Layout;
