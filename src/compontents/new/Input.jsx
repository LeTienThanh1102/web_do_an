import "./input.scss";
function Input(props) {
  const { data, setData, lable, inputType, classStyle } = props;

  return (
    <>
      <div className="input-lable">{lable}</div>
        <input
          type="text"
          className={classStyle}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
    </>
  );
}

export default Input;
