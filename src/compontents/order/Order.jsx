import "./order.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
function Order({ visiable, setOrder, infor }) {
  // const location = useLocation();
  // const orderProduct = location.state;
  const [number, setNumber] = useState(1);
  const [price, setPrice] = useState();
  const [color, setColor] = useState(0);
  const { setCartAdd, setTotal, addCart } = useContext(CartContext);
  useEffect(() => {
    setPrice(infor?.price);
    setNumber(1);
  }, [infor]);
  const handleColor = (e) => {
    setColor(e);
  };
  const handeIncret = () => {
    if (number > 1) {
      setNumber(number - 1);
      setPrice(infor?.price * (number - 1));
    } else {
      alert("bạn cần đặt tối thiểu 1 mặt hàng");
    }
  };
  const handeTang = () => {
    setNumber(number + 1);
    setPrice(infor?.price * (number + 1));
  };
  const handleCart = () => {
    const newItem = {
      img: infor.img,
      store: infor.store,
      name: infor.name,
      price: price,
      sol: number,
    };
    setCartAdd([...addCart, newItem]);
    setTotal((total) => (total += price));
    setOrder(false);
  };
  const size = ["M", "L", "XL"];
  return (
    <div className={`order ${visiable && "active"}`}>
      <div
        onClick={() => {
          setOrder(false);
        }}
        className="order__overlay"
      ></div>
      <div className="order__cart">
        <div
          onClick={() => {
            setOrder(false);
          }}
          className="order__icon"
        >
          <FontAwesomeIcon className="order__close" icon={faClose} />
        </div>
        <div className="order__img">
          <img src={infor?.img} alt="" className="order__anh" />
        </div>
        <div className="order__information">
          <h2 className="order__store">{infor?.store}</h2>
          <div className="order__mon">
            <span className="order__gt" style={{ fontSize: "2rem" }}>
              Tên Món:
            </span>
            <span className="order__name">{infor?.name}</span>
          </div>
          <div className="order__size">
            <span className="order__luachon" style={{ fontSize: "2rem" }}>
              Size:{" "}
            </span>
            {size.map((item, index) => (
              <button
                id={index}
                key={index}
                onClick={() => handleColor(index)}
                className={`order__button ${color === index ? "active" : ""}`}
              >
                {item}
              </button>
            ))}
            {/* <button className="order__button">L</button>
            <button className="order__button">XL</button> */}
          </div>
          <div className="order__soluong">
            <span style={{ fontSize: "2rem" }}>Số Lương: </span>
            <button onClick={() => handeIncret()} className="order__mana">
              -
            </button>
            <button className="order__mana">{number}</button>
            <button onClick={() => handeTang()} className="order__mana">
              +
            </button>
          </div>
          <div className="order__price">
            <span className="order__price-text" style={{ fontSize: "2rem" }}>
              Giá Bán:{" "}
            </span>
            {price && (
              <span className="order__money">
                ${Math.floor(price * 100) / 100}
              </span>
            )}
          </div>
          <div className="order__mota">
            <span style={{ fontSize: "2rem" }}>Mô tả sản phẩm:</span>
            <span style={{ fontSize: "1.8rem", padding: "0 12px" }}>
              Phở là đặc sản của Việt Nam, Phở bò được làm rất tỉ mỉ và cầu kì.
            </span>
          </div>
          <div className="order__add">
            <button className="order__cart1" onClick={() => handleCart()}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
