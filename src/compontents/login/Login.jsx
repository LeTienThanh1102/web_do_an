import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useState } from "react";
function Login() {
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "email") {
      setUser({ ...user, email: value });
    } else {
      setUser({ ...user, pass: value });
    }
  };
  const login = [
    {
      title: "Facebook",
      icon: faFacebook,
    },
    {
      title: "Số điện thoại",
      icon: faMobileScreen,
    },
    {
      title: "Google",
      icon: faFacebook,
    },
  ];
  const predictDocument = useMutation((data) => {
    return fetch("https://my-blog-kfgs.vercel.app/v1/auth/login-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        navigate("/trangchu");
      }
      else {
        alert("Đăng nhập lại");
      }
    });
  });

  const navigate = useNavigate();
  const handleClick = () => {
    console.log("sas");
    predictDocument.mutate({ ...user });
  };
  return (
    <div className="login">
      <div className="login-img">
        <img
          src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png"
          alt=""
        />
      </div>
      <div className="login-table">
        <div className="login_contaniner">
          <div className="login-header">
            <p className="login_name active">Đăng nhập</p>
            <Link to="/register" className="login_name">
              Đăng kí
            </Link>
          </div>
          <div className="login-button">
            {login.map((item, index) => (
              <div key={index} className="login_content">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="login-content-icon"
                />
                <div className="login__title">
                  <a href="" className="login__title-name">
                    {item.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="login__acc">Hoặc đăng nhập bằng tài khoản của bạn</p>
          <div className="login__acc-content">
            <input
              type="text"
              name="email"
              className="login__acc-input"
              placeholder="Tên đăng nhập hoặc Email"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              name="pass"
              className="login__acc-input"
              placeholder="Mật khẩu"
              onChange={(e) => handleChange(e)}
            />
            <button className="login_btn" onClick={handleClick}>
              Đăng nhập
            </button>
          </div>
          <p className="login-help">
            Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào.
            Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với
            <a href="" style={{ padding: "0 12px" }}>
              Chính sách quy định của Foody
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
