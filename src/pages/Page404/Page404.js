import React from 'react'
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import * as page404Animation from "./../../assets/animation/page404Animation.json";

const Page404 = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: page404Animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
      return (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 bg-indigo-900 bg-opacity-50 flex flex-col justify-center max-h-screen"
          style={{ zIndex: "999" }}
        >
          <Lottie options={defaultOptions} className="relative h-full w-full object-cover" />
          <button className="absolute font-bold inset-x-0 bottom-44 hover:text-md hover:-translate-y-1 hover:scale-110 duration-300">
            <Link className="rounded-lg p-3 bg-green-500 hover:bg-green-700" to={"/"}> Trở về trang chủ </Link>
          </button>
        </div>
      );
}

export default Page404