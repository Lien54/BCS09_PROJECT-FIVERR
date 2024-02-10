import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const Banner = () => {
  return (
    <Carousel className="mb-10" autoplay="true">
      <div className="relative h-full w-full">
        <img
          src="https://demo5.cybersoft.edu.vn/img/1.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25 ">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 space-y-10">
            <Typography
              variant="h2"
              color="white"
              className="text-3xl md:text-4xl lg:text-5xl tracking-wide leading-8"
            >
              Find the right <span className="italic">freelance</span> <br />{" "}
              service, right away
            </Typography>
            <form className="rounded-xl w-9/12">
              <label
                htmlFor="default-search"
                className="text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
            <div className="flex gap-2 justify-around item-center text-white">
              <p>Trusted by: </p>
              <button className="text-white">
                
                <p className="italic font-bold text-xl"><i className="fa-brands fa-meta"></i> Meta</p>
              </button>
              <button size="lg" color="white">
                <p className="italic font-bold text-xl"><span className="italic font-bold text-xl">G</span>oogle</p>
              </button>
              <button>
              <span className="italic font-bold text-xl">Netflix</span>
              </button>
              <button size="lg" color="white">
                <span className="italic font-bold text-xl">P&G</span>
              </button>
              <button size="lg" color="white">
                <span className="italic font-bold text-xl">PayPal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://demo5.cybersoft.edu.vn/img/2.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25 ">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 space-y-10">
            <Typography
              variant="h2"
              color="white"
              className="text-3xl md:text-4xl lg:text-5xl tracking-wide leading-8"
            >
              Find the right <span className="italic">freelance</span> <br />{" "}
              service, right away
            </Typography>
            <form className="rounded-xl w-9/12">
              <label
                htmlFor="default-search"
                className="text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
            <div className="flex gap-2 justify-around item-center text-white">
              <p>Trusted by: </p>
              <button className="text-white">
                
                <p className="italic font-bold text-xl"><i className="fa-brands fa-meta"></i> Meta</p>
              </button>
              <button size="lg" color="white">
                <p className="italic font-bold text-xl"><span className="italic font-bold text-xl">G</span>oogle</p>
              </button>
              <button>
              <span className="italic font-bold text-xl">Netflix</span>
              </button>
              <button size="lg" color="white">
                <span className="italic font-bold text-xl">P&G</span>
              </button>
              <button size="lg" color="white">
                <span className="italic font-bold text-xl">PayPal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://demo5.cybersoft.edu.vn/img/2.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25 ">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 space-y-10">
            <Typography
              variant="h2"
              color="white"
              className="text-3xl md:text-4xl lg:text-5xl tracking-wide leading-8"
            >
              Find the right <span className="italic">freelance</span> <br />{" "}
              service, right away
            </Typography>
            <form className="rounded-xl w-9/12">
              <label
                htmlFor="default-search"
                className="text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
            <div className="flex gap-2 justify-around item-center text-white">
              <p>Trusted by: </p>
              <button className="text-white">
                
                <p className="italic font-bold text-xl"><i className="fa-brands fa-meta"></i> Meta</p>
              </button>
              <button size="lg" color="white">
                <p className="italic font-bold text-xl"><span className="italic font-bold text-xl">G</span>oogle</p>
              </button>
              <button>
              <span className="italic font-bold text-xl">Netflix</span>
              </button>
              <button size="lg" color="white">
                <span className="italic font-bold text-xl">P&G</span>
              </button>
              <button size="lg" color="white">
                <span className="italic font-bold text-xl">PayPal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://demo5.cybersoft.edu.vn/img/4.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25 ">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 space-y-10">
            <Typography
              variant="h2"
              color="white"
              className="text-3xl md:text-4xl lg:text-5xl tracking-wide leading-8"
            >
              Find the right <span className="italic">freelance</span> <br />{" "}
              service, right away
            </Typography>
            <form className="rounded-xl w-9/12">
              <label
                htmlFor="default-search"
                className="text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
            <div className="flex gap-2 justify-around item-center text-white">
              <p>Trusted by: </p>
              <button className="text-white">
                
                <p className="italic font-bold text-xl"><i className="fa-brands fa-meta"></i> Meta</p>
              </button>
              <button size="lg" color="white">
                <p className="italic font-bold text-xl"><span className="italic font-bold text-xl">G</span>oogle</p>
              </button>
              <button>
              <span className="italic font-bold text-xl">Netflix</span>
              </button>
              <button size="lg" color="white">
                <span className="italic font-bold text-xl">P&G</span>
              </button>
              <button size="lg" color="white">
                <span className="italic font-bold text-xl">PayPal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://demo5.cybersoft.edu.vn/img/5.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25 ">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 space-y-10">
            <Typography
              variant="h2"
              color="white"
              className="text-3xl md:text-4xl lg:text-5xl tracking-wide leading-8"
            >
              Find the right <span className="italic">freelance</span> <br />{" "}
              service, right away
            </Typography>
            <form className="rounded-xl w-9/12">
              <label
                htmlFor="default-search"
                className="text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
            <div className="flex gap-2 justify-around item-center text-white">
              <p>Trusted by: </p>
              <button className="text-white">
                
                <p className="italic font-bold text-xl"><i className="fa-brands fa-meta"></i> Meta</p>
              </button>
              <button size="lg" color="white">
                <p className="italic font-bold text-xl"><span className="italic font-bold text-xl">G</span>oogle</p>
              </button>
              <button>
              <span className="italic font-bold text-xl">Netflix</span>
              </button>
              <button size="lg" color="white">
                <span className="italic font-bold text-xl">P&G</span>
              </button>
              <button size="lg" color="white">
                <span className="italic font-bold text-xl">PayPal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
export default Banner;
