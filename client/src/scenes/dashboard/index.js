import React from "react";
import ContentLeft from "../../components/ContentLeft.js";
import ContentRight from "../../components/ContentRight.js";
import Sidebar from "../../components/Sidebar.js";
import Topbar from "../../components/Topbar.js";

const Dashboard = () => {
  return (
    <div className="flex flex-row noScrollbar">
      <Sidebar />

      <div className="flex flex-col h-screen flex-1">
        <Topbar />
        <div className="flex-1 h-full flex flex-row">
          <ContentLeft />
          <ContentRight />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
