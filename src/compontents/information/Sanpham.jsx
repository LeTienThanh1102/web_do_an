import Main from "./Main";

function Sanpham({ sp }) {
  return (
    <div className="sp__wrap">
      <h2 className="sp__header">Các sản phẩm nổi bật dành cho gia đình</h2>
      {sp.map((item, index) => (
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

export default Sanpham;
