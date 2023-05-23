import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FoodItem(prop) {
  const handleOpen = (item) => {
    prop.setInfor(item);
    prop.setOrder(true);
  };
  return (
    <div className="hello">
      <div className="food__content">
        <div className="food__tym">
          <FontAwesomeIcon className="food__icon-tym" icon={faHeart} />
        </div>
        <div className="food__eye">
          <FontAwesomeIcon className="food__icon-eye" icon={faEye} />
        </div>
        <div className="food__ang">
          <img src={prop.img} alt="" className="food__img" />
        </div>
        <div className="food__con">
          <p className="food__name">{prop.name}</p>
          <div className="food__font">
            <FontAwesomeIcon className="food__icon" icon={prop.icon} />
            <FontAwesomeIcon className="food__icon" icon={prop.icon} />
            <FontAwesomeIcon className="food__icon" icon={prop.icon} />
            <FontAwesomeIcon className="food__icon" icon={prop.icon} />
            <FontAwesomeIcon className="food__icon" icon={prop.icon} />
          </div>
          <div className="food__title">{prop.title}</div>
          <div className="food__cart">
            <button onClick={() => handleOpen(prop.item)} className="food__button">
              Buy Food
            </button>
            <span className="food__price">${prop.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
