import React from "react";
import logo from "../logo.png";
const Navbar = () => {
  return (
    <>
      <div className="px-10">
        <div className="container p-5 flex justify-between">
          <div className="flex w-1/2  items-center">
            <div className="logo mx-2 w-15 h-15 overflow-hidden justify-center items-center flex-col ">
              <img src={logo} alt="logo" className="text-center" width={50} height={50} />
              <h5 className="text-center font-bold">PEKANU</h5>
            </div>
            <button
              href="#"
              className="bg-gray-900 text-white mx-3 px-3 py-2 rounded-md text-sm font-medium"
              aria-current="page"
            >
              Home
            </button>
            <button
              href="create-task"
              className="text-gray-500 hover:bg-gray-700 hover:text-white mx-3 px-3 py-2 rounded-md text-sm font-medium"
            >
              Create Task
            </button>

            <button
              href="#"
              className="text-gray-500 hover:bg-gray-700 hover:text-white mx-3 px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </button>

            <button
              href="#"
              className="text-gray-500 hover:bg-gray-700 hover:text-white mx-3 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </button>
          </div>
          <div className="">
            <button
              href="#"
              className="bg-gray-900 text-white mx-3 px-3 py-2 rounded-md text-sm font-medium mt-3"
              aria-current="page"
            >
              Connect Wallet 🐺
            </button>
          </div>
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Navbar;
