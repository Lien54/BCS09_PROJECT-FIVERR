import React, { useState } from "react";
import * as signUpAnimation from "./../../assets/animation/signUpAnimation.json";
import Lottie from "react-lottie";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/userService";

const Register = () => {
  // antd & lottifiles
  const [messageApi, contextHolder] = message.useMessage();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: signUpAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  //
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        phone: "",
        birthday: "",
        gender: true,
      },
      onSubmit: (values) => {
        console.log(values);
        userService
          .registerServ(values)
          .then((res) => {
            console.log(res);
            messageApi.open({
              type: "success",
              content: "Đăng ký thành công",
            });
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
            messageApi.open({
              type: "error",
              content: "Đăng kí thất bại",
            });
          });
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .matches("Tên không đúng định dạng")
          .required("Vui lòng không bỏ trống"),
        email: Yup.string()
          .required("Vui lòng không bỏ trống email")
          .email("Email không đúng định dạng"),
        password: Yup.string()
          .matches(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            "Vui lòng nhập mật khẩu tối đa 6 đến 16 kí tự bao gồm số và kí tự đặc biệt"
          )
          .required("Vui lòng không bỏ trống mật khẩu"),
        passwordConfirm: Yup.string()
          .required("Vui lòng không bỏ trống xác nhận mật khẩu")
          .oneOf([Yup.ref("passrword")], "Mật khẩu phải trùng nhau"),
        phone: Yup.string()
          .matches(
            /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
            "Vui lòng nhập đúng định dạng số điện thoại"
          )
          .required("Vui lòng không bỏ trống"),
        birthday: Yup.string().required("Birthday không được bỏ trống"),
      }),
    });

  return (
    <>
      {contextHolder}
      <div className="flex justify-center items-center py-20">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="col_left">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className="col-right">
              <form className="max-w-sm space-y-5">
                <h2 className="font-bold text-2xl mb-3">Sign Up</h2>
                {/* userName */}
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name ? (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.name}
                      </p>
                    ) : null}
                </div>
                {/* email */}
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    type="type"
                    id="email"
                    name="email"
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.email}
                      </p>
                    ) : null}
                </div>
                {/* password */}
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    className="relative rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.password}
                      </p>
                    ) : null}
                </div>
                {/* <button
                  type="button"
                  className="show"
                  style={{
                    position: "absolute",
                    top: 8.5,
                    right: 10,
                    border: "none",
                    opacity: "0.5",
                    background: "none",
                  }}
                  onClick={togglePassword}
                >
                  <i className="fa-solid fa-eye"></i>
                </button> */}
                {/* repeat password */}
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className="fa-solid fa-key"></i>
                  </span>
                  <input
                    type="password"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Repeat Your Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirm}
                  />
                  {errors.passwordConfirm && touched.passwordConfirm ? (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.passwordConfirm}
                      </p>
                    ) : null}
                </div>
                {/* phone */}
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Phone Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone ? (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.phone}
                      </p>
                    ) : null}
                </div>
                {/* birthday */}
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className="fa-solid fa-cake-candles"></i>
                  </span>
                  <input
                    type="number"
                    id="birthday"
                    name="birthday"
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="dd/mm/yyyy"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.birthday}
                  />
                  {errors.birthday && touched.birthday ? (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.birthday}
                      </p>
                    ) : null}
                </div>
                {/* gender */}
                <div className="flex flex-row items-center">
                  <i className="fa-solid fa-venus-mars font-bold text-xl mr-10"></i>
                  <div className="flex items-center">
                    <input
                      id="male"
                      type="radio"
                      name="gender"
                      defaultValue="true"
                      className="w-4 h-4 border-gray-300  dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      defaultChecked
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="male"
                      className="block ms-2 text-md font-semibold text-gray-9maleext-gray-300 mr-6"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="female"
                      type="radio"
                      name="gender"
                      defaultValue="false"
                      onChange={handleChange}
                      className="w-4 h-4 border-gray-300 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="female"
                      className="block ms-2 text-md font-semibold text-gray-900 dark:text-gray-300"
                    >
                      Female
                    </label>
                  </div>
                </div>
                <div className="form-group mt-2-frm">
                  <input
                    type="checkbox"
                    required
                    name="agree-term"
                    id="agree-term"
                    className="agree-term"
                  />
                  <label htmlFor="agree-term" className="label-agree-term">
                    <span>
                      <span />
                    </span>
                    I agree all statements in{" "}
                    <a href="#" className="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="text-black font-bold bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
