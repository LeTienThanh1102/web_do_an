import "./register.scss";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "react-query";
import * as Yup from "yup";
function Register() {
  // const [name,setName]=useState('');
  // const [email,setEmail]=useState('');
  // const [phone,setPhone]=useState('');
  // const [password,setPassword]=useState('');
  // const [confirm,setConfirm]=useState('');
  // const handleRegister=()=>{
  //   navigate("/login");
  // }
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     phone: "",
  //     pass: "",
  //     confirm: "",
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string()
  //       .required("Required")
  //       .min(4, "Must be 4 characters or more"),
  //     email: Yup.string()
  //       .required("Required")
  //       .matches(
  //         /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  //         "Please enter valid email address"
  //       ),
  //     password: Yup.string()
  //       .required("Required")
  //       .matches(
  //         /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,17}$/,
  //         "Password must be 8-17 character and contain at least one letter, one number"
  //       ),
  //     confirm: Yup.string()
  //       .required("Required")
  //       .oneOf([Yup.ref("password"), null], "Password must match"),
  //     phone: Yup.string()
  //       .required("Required")
  //       .matches(
  //         /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  //         "Must be a valid phone number"
  //       ),
  //   }),
  // });
  const [user, setUser] = useState({
    email: "",
    name: "",
    pass: "",
    phone: "",
  });
  const predictDocument = useMutation((data) => {
    return fetch("https://my-blog-kfgs.vercel.app/v1/auth/register-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        navigate("/trangchu");
      }
    });
  });
  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "email") {
      setUser({ ...user, email: value });
    }
    if (e.target.name === "pass") {
      setUser({ ...user, pass: value });
    }
    if (e.target.name === "phone") {
      setUser({ ...user, phone: value });
    }
    if (e.target.name === "name") {
      setUser({ ...user, name: value });
    }
  };
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("sas");
    predictDocument.mutate({ ...user });
  };

  return (
    <div className="register">
      <div className="register__contaniner">
        <div className="register__header">
          <p className="register__heading">Đăng kí tài khoản</p>
        </div>
        <div className="register__body">
          <div className="inforfrom">
            <label> Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your name"
            />
            <label> Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your email"
            />
            <label> Password</label>
            <input
              type="password"
              id="password"
              name="pass"
              value={user.pass}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your password"
            />
            <label> Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your phone number"
            />
            <div className="register__submit">
              <button className="submit" onClick={handleClick}>
                {" "}
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
