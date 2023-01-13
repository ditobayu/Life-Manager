import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

const Task = () => {
  return (
    <div className="flex flex-row w-screen">
      <Sidebar />
      <div className="bg-slate-100 flex-1 h-screen">
        <Topbar />
      </div>
      <div className="bg-slate-100 w-80 h-screen">asd</div>
    </div>
  );
};

export default Task;
