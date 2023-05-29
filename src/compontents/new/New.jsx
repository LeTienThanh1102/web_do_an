import { useState } from "react";
import Input from "./Input";
import "./new.scss";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/postSlice";
import { useNavigate } from 'react-router-dom';
function New() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [name, setName] = useState("Add a name");
  const [title, setTitle] = useState("Add some descriptions");
  const [price, setPrice] = useState("Price");
  const [buy, setBuy] = useState("Bought");
  const [place, setPlace] = useState("Address");
  const [imageData, setImageData] = useState(null);
  const handlePost = () => {
    const newPost = {
      name: name,
      title: title,
      price: price,
      place: place,
      img:imageData,
    };
    dispatch(createPost(newPost));
    navigate('/trangchu')
  };
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageData(reader.result);
    };
  };
  return (
    <section className="new-list">
      <div className="new-list-item">
        <div className="new-head">
          <input type="file" onChange={handleFileSelect} className="download" />
          <div className="choose">
            {imageData && (
              <img src={imageData} alt="selected file" className="new-img" />
            )}
          </div>
        </div>
        <div className="new-content">
          <div className="new-input">
            <Input
              data={name}
              setData={setName}
              classStyle="makepost-title"
              lable="Name product"
            />
            <Input
              data={title}
              setData={setTitle}
              classStyle="makepost-title"
              lable="Descriptions"
            />
            <Input
              data={price}
              setData={setPrice}
              classStyle="makepost-title"
              lable="Price"
            />
            <Input
              data={place}
              setData={setPlace}
              classStyle="makepost-title"
              lable="Place"
            />
            <Input
              data={buy}
              setData={setBuy}
              classStyle="makepost-title"
              lable="Buy"
            />
          </div>
          <p className="save" onClick={handlePost}>
            Post
          </p>
        </div>
      </div>
    </section>
  );
}

export default New;
