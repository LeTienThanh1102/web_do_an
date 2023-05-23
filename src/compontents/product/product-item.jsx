import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./product-item.scss";

function ProductItem(props) {
  // const navigate = useNavigate();
  const handleOrder = () => {
    // navigate("/order", { state: props });
    props.setInfor(props);
    props.setOrder(true);
  };
  
  return (
    <div className="product-item">
      <div className="theme"></div>
      <div className="product__single">
        <div className="food__tym1">
          <FontAwesomeIcon className="food__icon-tym1" icon={faHeart} />
        </div>
        <img src={props.img} alt="" className="product__img" />
        <h3 className="product__name">{props.name}</h3>
        <div className="product_icon">
          <FontAwesomeIcon className="product_icon-a" icon={props.icon} />
          <FontAwesomeIcon className="product_icon-a" icon={props.icon} />
          <FontAwesomeIcon className="product_icon-a" icon={props.icon} />
          <FontAwesomeIcon className="product_icon-a" icon={props.icon} />
          <FontAwesomeIcon className="product_icon-a" icon={props.icon} />
        </div>
        <div className="product_body">
          <p className="product__price">${props.price}</p>
          <button onClick={() => handleOrder()} className="product__buy">
            {props.cart}
          </button>
        </div>
        <div className="product__footer">
          <div className="product__place">{props.place}</div>
          <div className="product__cart">{props.buy}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
