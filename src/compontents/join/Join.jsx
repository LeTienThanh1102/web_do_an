import { useState } from "react";
import { useSelector } from "react-redux";
import FoodItem from "../food/FoodItem";

function Join({setInfor, setOrder}) {
  const post = useSelector((state) => state.post.posts);
  return (
    <div className="food">
      <div className="food__container">
        <div className="food__header">
          <h2 className="food__heading">Món ăn mới được thêm vào</h2>
        </div>
        <div className="food__body">
          <div className="food__col">
            {post.slice(1).map((item, index) => (
              <div key={index} className="food__pro">
                <div className="food__wrap">
                  <FoodItem
                    setInfor={setInfor}
                    setOrder={setOrder}
                    item={item}
                    img={item.img}
                    name={item.name}
                    icon={item.icon}
                    title={item.title}
                    price={item.price}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
