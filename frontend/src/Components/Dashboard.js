import React from "react";
import Task from './Task';
const tasks= ["Fill This Tank in 2 Days","Make a Omellate in 10 minutes","Make this assignment in 10 days ","Make this chart in 2days"];
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
