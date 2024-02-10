import React from "react";
import * as loginAnimation from "./../../assets/animation/loginAnimation.json";
import Lottie from "react-lottie";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { userService } from "../../services/userService";
import { message } from "antd";
import { saveLocalStore } from "../../utils/local";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveInfoUser } from "../../redux/slice/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
        userService
          .loginService(values)
          .then((res) => {
            console.log(res);
            messageApi.open({
              type: "success",
              content: "Đăng nhập thành công",
            });
            saveLocalStore(res.data.content, "user_Info");
            dispatch(saveInfoUser(res.data.content));
            setTimeout(() => {
              navigate("/");
            }, 1000);
          })
          .catch((err) => {
            console.log(err);
            messageApi.open({
              type: "error",
              content: err.response.data.content,
            });
          });
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .required("Vui lòng không bỏ trống")
          .email("Email không đúng định dạng !"),
        password: Yup.string()
          .required("Vui lòng không bỏ trống")
          .min(6, "pass từ 6 - 32 ký tự !")
          .max(32, "pass từ 6 - 32 ký tự !"),
      }),
    });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {contextHolder}
      <div className="flex justify-center items-center py-20">
        <div className="grid grid-cols-2">
          <div className="col_left">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          <div className="col-right">
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <h2 className="font-bold text-3xl mb-5">Sign In</h2>
              <div className="max-w-sm">
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-2xl font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="type"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Vui lòng nhập email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                  ) : null}
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-2xl font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Vui lòng nhập mật khẩu"
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
                <button
                  type="submit"
                  className="text-black font-bold bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
