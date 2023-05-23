import {
  faCartShopping,
  faClose,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./header.scss";

import { CartContext } from "../Context/CartContext";
function Header() {
  const { addCart } = useContext(CartContext);
  // const [champion,setChampion] = useState()
  const baseUrl = "www.themealdb.com/api/json/v1/1/list.php?c=list";
  // const fetchData = async(url) => {
  //     let data = await fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch(err => console.error(err))
  // }
  // useEffect(() => {
  //     fetchData(baseUrl)
  // },[])
  const search = useRef(null);
  const navigate = useNavigate();
  const menu = [
    { name: "Đồ ăn", path: "/infor" },
    {name: "Thực phẩm",path: "/thucpham"},
    {name: "Hoa quả",path: "/fruit"},
    {name: "Khuyến mãi",path: "/sale"},
    {name: "Thêm sản phẩm mới",path: "/new"}
  ];
  const handleSearch = () => {
    search.current.classList.toggle("active");
  };
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/trangchu" className="header__img">
          <img
            src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png"
            alt=""
            className="header_logo"
          />
        </Link>
        <ul className="header-list">
          {menu.map((item, i) => (
            <li key={i} className="header-items">
              <Link to={item.path} className="header-name">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="header-use">
          <div ref={search} className="header__search-contact">
            <div className="header__search-bro">
              <div className="header__close" onClick={handleSearch}>
                <FontAwesomeIcon icon={faClose} />
              </div>
              <div className="header__search-name">
                <input
                  className="header__search-content"
                  placeholder="Search here"
                />
                <FontAwesomeIcon
                  className="header__search-icon"
                  icon={faSearch}
                />
              </div>
            </div>
          </div>
          <div className="header__use_search" onClick={handleSearch}>
            <FontAwesomeIcon className="header_use-icon" icon={faSearch} />
          </div>
          <Link to="/cart" className="header__cartItem">
            <FontAwesomeIcon icon={faCartShopping} />
            {addCart.length > 0 && (
              <div className="header__cart">{addCart.length}</div>
            )}
          </Link>
          <div className="header-login">
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
