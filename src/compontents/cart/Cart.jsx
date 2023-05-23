import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import "./cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useEffect } from "react";
function Cart() {
  const { addCart, total, setCartAdd, setTotal } = useContext(CartContext);
  const handleDelete = (item) => {
    setCartAdd(addCart.filter((e) => e.name !== item.name));
    if (addCart.length === 1) {
      setTotal(0);
    } else {
      setTotal((total) => (total -= item.price));
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cart__vip">
      <Header />
      <div className="cart">
        <div className="cart_logo">
          <img
            src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png"
            alt=""
            className="cart__logo__img"
          />
        </div>
        <div className="cart__body">
          <div className="cart__header">Check-Out</div>
          <div className="cart__pro">
            {addCart.map((item, index) => (
              <div key={index}>
                <div className="cart_list">
                  <div className="cart__img">
                    <img className="cart__img_anh" src={item.img} alt="" />
                  </div>
                  <div className="cart_info">
                    <div className="cart__store">
                      <span style={{ fontSize: "1.6rem" }}>Tên quán ăn: </span>
                      {item.store}
                    </div>
                    <div className="cart__name1">
                      <span
                        style={{ fontSize: "1.6rem", padding: "0 12px 0 0" }}
                      >
                        Món ăn:{" "}
                      </span>
                      {item.name}
                    </div>
                    <div className="cart__price">
                      <span
                        style={{ fontSize: "1.6rem", padding: "0 12px 0 0" }}
                      >
                        Giá Bán:{" "}
                      </span>
                      {item.price} $
                      <div className="cart_price">
                        <span
                          style={{ fontSize: "1.6rem", padding: "0 12px 0 0" }}
                        >
                          Số lượng:{" "}
                        </span>
                        {item.sol}
                      </div>
                    </div>
                  </div>
                  <div
                    className="cart__clear"
                    onClick={() => handleDelete(item)}
                  >
                    <FontAwesomeIcon
                      className="cart_icon_close"
                      icon={faXmark}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__total">
            <div className="tong">TOTAL: {Math.floor(total * 100) / 100} $</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
