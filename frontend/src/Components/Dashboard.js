import React from "react";
import Task from './Task';
const tasks= ["Host a MERN Website on EC2","Matrix Multiplication Task of 1000x1000 Matrix","Encryption of 10x10 Matrix","Run a flask backend on Elastic Bean"];
const Dashboard = () => {
  return (
    <>
      <div className="flex p-5">
        <div className="w-1/2 border border-red-500 rounded-sm p-3 flex-col text-center">
            Feedbacks
        </div>
        <div className="w-1/2 border border-green-500 rounded-sm p-3 flex-col text-center">
            Dummy Tasks Open By User 👍
            {tasks.map((item,i)=>{
                return(<Task task={item} key={i} price={i*0.05} />);
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
