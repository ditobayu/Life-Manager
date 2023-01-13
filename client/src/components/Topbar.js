import React from "react";

const Topbar = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 w-full ">
      <div className="flex flex-row bg-white dark:bg-slate-800 m-4 ml-0  rounded-2xl justify-between items-center px-8 shadow-md  h-16 ">
        <div>
          <div className="text-xs">Dashboard</div>
        </div>
        <div>Dito Bayu</div>
      </div>
    </div>
  );
};

export default Topbar;
