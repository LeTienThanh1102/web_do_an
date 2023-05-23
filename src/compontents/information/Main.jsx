import './main.scss'

function Main(props) {
    return ( 
        <div className="infor">
            <div className="infor__containerr">
                <div className="infor__headerr">
                    <img src={props.img} alt="" className="inforr__img" />
                </div>
                <div className="inforr__body">
                    <p className="inforr__name">{props.name}</p>
                    <div className="inforr__price">
                        <span className="infor__text">Giá sản phẩm: </span>
                        {props.price}
                    </div>
                    <div className="infor__title">
                        <span>Mô tả:</span>
                        <p className="infor__litle">{props.title}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Main;