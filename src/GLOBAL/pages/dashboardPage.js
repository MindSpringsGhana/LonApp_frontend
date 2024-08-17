import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../GLOBAL/styles/dashboardStyles/dashboard-page.scss";
import DashboardAside from "../components/sections/dashboard/dashboardAside";
import DashboardMain from "../components/sections/dashboard/dashboardMain";
import DashboardHeader from "../components/sections/dashboard/dashboardHeader";
const DashBoardPage = () => {
  return (
    <>
      <main className="dashboard-main">
      <div className="dashboard-page-wrapper">
        <DashboardAside />
        <div className="dashboard-col">
          <DashboardHeader />
          <DashboardMain />
        </div>
      </div>
      </main>
      
    </>
  );
};

export default DashBoardPage;
