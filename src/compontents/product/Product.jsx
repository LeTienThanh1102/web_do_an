import { faStar } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./product.scss";
import ProductItem from "./product-item";
import { Link } from "react-router-dom";

function Product({ setOrder, setInfor }) {
  const product = [
    {
      store: "Trung tâm thương mại Mac Plaza",
      img: "https://ruavangfood.com/storage/uploads/2021/11/13/618f10ef211a8.png",
      name: "Đùi gà miếng",
      icon: faStar,
      price: 20.99,
      cart: "Buy Food",
      buy: "Đã bán 300p",
      place: "Hồ Chí Minh",
    },
    {
      store: "Mộc Trà Quán",
      img: "https://tuyentopro123.github.io/Food_web/assets/img/dish-1.png",
      name: "Hamburger",
      icon: faStar,
      price: 60.99,
      cart: "Buy Food",
      buy: "Đã bán 550p",
      place: "Quận Bình Thạnh",
    },
    {
      store: "Hà Nội Phố_Phố Cổ",
      img: "https://i2.wp.com/phouttran.com/wp-content/uploads/2021/11/TO-DB.png",
      name: "Phở Hà Nội-Phố Cổ",
      icon: faStar,
      price: 10.99,
      cart: "Buy Food",
      buy: "Đã bán 1000p",
      place: "Thủ đô Hà Nội",
    },
    {
      store: "Cầu Long Biên- 112 Tôn Đức Thắng",
      img: "https://banhmipho.vn/wp-content/uploads/2021/03/ca-ngu.png",
      name: "Bánh mì Dân Tổ",
      icon: faStar,
      price: 2.99,
      cart: "Buy Food",
      buy: "Đã bán 1500p",
      place: "Cầu Long Biên-Hà Nội",
    },
    {
      store: "Anh Chị Quán",
      img: "https://www.pho24.com.vn/wp-content/uploads/2018/05/600x328px_MENU_SLIDE-BIG-PHO_MELAMIN-01.png",
      name: "Bún Bò Huế",
      icon: faStar,
      price: 20.99,
      cart: "Buy Food",
      buy: "Đã bán 100p",
      place: "Thừa Thiên Huế",
    },
    {
      store: "McDonald Plaza",
      img: "https://khothietke.net/wp-content/uploads/2021/05/PNGKhothietke.net-03301.png",
      name: "Pizza-McDonald's",
      icon: faStar,
      price: 20.99,
      cart: "Buy Food",
      buy: "Đã bán 300p",
      place: "Hồ Chí Minh",
    },
  ];
  // 
  // const $$=document.querySelectorAll.bind(document);
  // const $=document.querySelector.bind(document);

  // const tabs=$$('.product__best');
  // const tabActive=$('.product__best.active');
  // tabs.forEach((tab)=>{
  //     tab.onClick=function(){
  //       tabActive.classList.romove('.active')

  //       this.classList.add('.active');
  //     }
  // })
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__header">
          <h3 className="product__heading">Hôm nay ăn gì??</h3>
          <p className="product__best active">Best sellers</p>
          <Link to="/sale" className="product__best">
            Khuyến mãi mỗi ngày
          </Link>
        </div>
        <div className="product__body">
          <div className="product__row">
            {product.map((item, index) => (
              <div key={index} className="product__col-4">
                <div className="product_items">
                  <ProductItem
                    setInfor={setInfor}
                    setOrder={setOrder}
                    img={item.img}
                    name={item.name}
                    icon={item.icon}
                    cart={item.cart}
                    price={item.price}
                    buy={item.buy}
                    place={item.place}
                    store={item.store}
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

export default Product;
