import Main from "./Main";

function Fruit() {
    const fruit=[
        {
            img:"https://cdn.tgdd.vn/2021/08/content/Nho-mau-don-la-gi-cac-loai-nho-mau-don-cach-chon-mua-va-bao-quan-duoc-lau-3-800x510.jpg",
            name:"Nho Mẫu Đơn",
            price:"$390.00",
            title:"Nho Mẫu đơn là một giống nho lưỡng bội, là kết quả của sự lai tạo giữa giống Akitsu-21 và 'Hakunan' do Viện Khoa học Cây ăn quả Quốc gia ở Nhật Bản tạo ra vào năm 1988. Nó có quả mọng lớn màu xanh vàng, kết cấu thịt, hương vị, nồng độ chất rắn hòa tan cao và độ axit thấp."
        },
        {
            img:"http://cdn.tgdd.vn/Files/2018/03/15/1074573/6-loi-ich-bat-ngo-cua-trai-kiwi-202110211628557582.jpg",
            name:"KiWi",
            price:"$90.00",
            title:"Kiwi hay dương đào là một loài cây có quả mọng ăn được thuộc nhóm loài cây gỗ thân leo trong chi Actinidia. Nhóm cây quả kiwi được trồng phổ biến nhất là Actinidia deliciosa 'Hayward' quả có hình bầu dục, kích thước bằng quả trứng gà cỡ lớn: dài 5–8 cm và đường kính 4,5–5,5 cm."
        },
        {
            img:"https://cdn.tgdd.vn/2020/10/CookProduct/1-1200x676-46.jpg",
            name:"Xoài Cô Đơn",
            price:"$70.00",
            title:"Xoài là một loại trái cây vị ngọt thuộc chi Xoài, bao gồm rất nhiều quả cây nhiệt đới, được trồng chủ yếu như trái cây ăn được. Phần lớn các loài được tìm thấy trong tự nhiên là các loại xoài hoang dã. Tất cả đều thuộc họ thực vật có hoa Anacardiaceae."
        },
        
           
    ]
  return (
    <div className="sp__wrap">
      <h2 className="sp__header">Các loại trái cây bốn mùa</h2>
      {fruit.map((item, index) => (
        <div key={index} className="sp__list">
          <Main
            img={item.img}
            name={item.name}
            price={item.price}
            title={item.title}
          />
        </div>
      ))}
    </div>
  );
}

export default Fruit;
