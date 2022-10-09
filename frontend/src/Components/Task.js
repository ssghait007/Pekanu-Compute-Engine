import React from "react";

const Task = ({ task, price }) => {
  return (
    <>
      <div className="flex justify-center flex-col border mt-1 p-4">
        <div className="flex justify-between">
          <p className=" text-green-700 ">{task}</p>
          <small className="font-bold text-danger-500">{price.toFixed(2)} Ether</small>
        </div>
        <a
          href="#"
          className="bg-gray-900 w-1/6 text-white mt-1  rounded-md text-sm font-medium"
          aria-current="page"
        >
          Do It
        </a>
      </div>
    </>
  );
};

export default Task;
