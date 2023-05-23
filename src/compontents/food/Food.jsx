import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import "./food.scss";
import {
  faAnglesRight,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";
function Food({ setOrder, setInfor }) {
  const food = [
    {
      img: "https://cdn.daynauan.info.vn/wp-content/uploads/2018/06/kim-chi-han-quoc.jpg",
      name: "Kim Chi",
      icon: faStar,
      title:
        'Hamburgers ở Úc và New Zealand thường có cà chua, rau diếp, pho mát và một ít thịt (có tẩm nước sốt BBQ hoặc nước sốt cà chua), và thường có củ cải đường, hành tây, trứng, thịt hun khói và dứa (còn gọi là "burger with the lot). "BLT" có nghĩa là hamburger dùng kèm với thịt hun khói, rau diếp, và cà chua.',
      price: 23.0,
    },
    {
      img: "https://congluan-cdn.congluan.vn/files/content/2022/05/17/hanh-trinh-chiec-banh-hamburger-%E2%80%98chinh-phuc%E2%80%99-nuoc-my-071525855.jpg",
      name: "Hamburger",
      icon: faStar,
      title:
        "Kim chi một món ăn chính trong ẩm thực tại bán đảo Triều Tiên, là một món ăn truyền thống gồm các loại rau muối và lên men, chẳng hạn như bắp cải napa và củ cải Hàn Quốc, được chế biến với nhiều lựa chọn gia vị khác nhau bao gồm gochugaru, hành lá, tỏi, gừng và jeotgal.",
      price: 63.0,
    },
    {
      img: "https://i.ytimg.com/vi/UPcT-I7D8Ic/maxresdefault.jpg",
      name: "Mandu",
      icon: faStar,
      title:
        "Mandu là một món bánh gối của người Triều Tiên, tương tự món gyoza của người Nhật Bản. Khi được nướng hoặc chiên, món này được gọi là gunmandu. Mandu thường được dùng với nước chấm pha từ xì dầu và dấm. Mandu thường được ăn kèm với kim chi, và một nước chấm làm từ nước tương, dấm và ớt.",
      price: 69.0,
    },
    {
      img: "https://cdn.tgdd.vn/2020/10/CookProduct/Sushi-la-gi-co-tot-khong-nhung-loai-sushi-tot-va-khong-tot-cho-suc-khoe-1-1200x676.jpg",
      name: "Sushi",
      icon: faStar,
      title:
        "Sushi là một món ăn Nhật Bản gồm cơm trộn giấm kết hợp với các nguyên liệu khác. Neta và hình thức trình bày sushi rất đa dạng, nhưng nguyên liệu chính mà tất cả các loại sushi đều có là shari. Neta phổ biến nhất là hải sản. Thịt sống cắt lát gọi riêng là sashimi.",
      price: 43.52,
    },
    {
      img: "https://channel.mediacdn.vn/2022/1/14/photo-1-16421527304541279147087.jpg",
      name: "Dookki Việt Nam",
      icon: faStar,
      title:
        "Dookki xuất hiện lần đầu tiên tại Việt Nam vào những ngày cuối năm 2018. Đây là thương hiệu tiên phong mở đầu cho hình thức buffet lẩu topokki tại Việt Nam và nhanh chóng đạt được sự yêu thích và tin tưởng từ những tín đồ đam mê nền ẩm thực Hàn Quốc.",
      price: 139.22,
    },
    {
      img: "http://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg",
      name: "Phở",
      icon: faStar,
      title:
        "Phở là một món ăn truyền thống của Việt Nam, có nguồn gốc từ Nam Định, Hà Nội và được xem là một trong những món ăn tiêu biểu cho nền ẩm thực Việt Nam. Thành phần chính của phở là bánh phở và nước dùng cùng với thịt bò hoặc thịt gà cắt lát mỏng. Thịt bò thích hợp nhất để nấu phở là thịt, xương từ các giống bò ta.",
      price: 113.43,
    },
    {
      img: "https://chiasethanhcong.net/wp-content/uploads/2016/10/mo-quan-cafe.png",
      name: "Cafe",
      icon: faStar,
      title:
        "Cà phê là một loại thức uống được ủ từ hạt cà phê rang, lấy từ quả của cây cà phê. Các giống cây cà phê được bắt nguồn từ vùng nhiệt đới châu Phi và các vùng Madagascar, Comoros, Mauritius và Réunion trên các khu vực thuộc đường xích đạo.",
      price: 99.1,
    },
    {
      img: "https://i-giadinh.vnecdn.net/2022/04/20/Buoc-9-9-3230-1650439557.jpg",
      name: "Spaghetti",
      icon: faStar,
      title:
        "Spaghetti, hay thường được gọi là mì Ý, là một loại pasta sợi dài, nhỏ, hình trụ. Nó là một loại thực phẩm thiết yếu của nền ẩm thực Ý truyền thống. Như nhiều loại mì pasta khác, spaghetti được làm từ bột mì xay và nước.",
      price: 153.32,
    },
    {
      img: "http://cdn.tgdd.vn/Files/2021/09/08/1381072/cach-lam-che-thai-sau-rieng-thom-ngon-an-la-ghien-202109081353585993.jpg",
      name: "Các loại chè",
      icon: faStar,
      title:
        "Chè là một món ăn được dùng làm món tráng miệng trong ẩm thực Châu Á, nó có xuất xứ từ Việt Nam và nhiều quốc gia khác như Thái Lan, Campuchia... Đây là một món nước, trong đó nguyên liệu quan trọng nhất là đường ăn.",
      price: 3.15,
    },
  ];
 
  return (
    <div className="food">
      <div className="food__container">
        <div className="food__header">
          <h2 className="food__heading">
            Các món ẩm thực truyền thống của các nước trên Thế Giới
          </h2>
          <div className="food__mater">
            <Link to="/infor" className="food__them">
              Xem thêm
            </Link>
            <FontAwesomeIcon className="right" icon={faAnglesRight} />
          </div>
        </div>
        <div className="food__body">
          <div className="food__col">
            {food.map((item, index) => (
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

export default Food;
