import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../../styles/dashboardStyles/dashboard-main.scss";
import DashboardMainHeader from "../dashboard/dashboardMainHeader";
import { getDashboardConfig } from "../../../../utils/dashboardHandlers";
import DashboardCardList from "./dashboardCardList";  // Import the new CardList component
import AddNewEmployee from "./addNewEmployee";

const DashboardMain = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxStyles = { marginRight: "10px" };
  const activeLabel = useSelector((state) => state.dashboard.activeLabel); // Get the active label from Redux


  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const {headerItems, dataE, headerMarginRightValues, className} = getDashboardConfig(activeLabel);

  return (
    <section className="dashboard-main-section">
      <AddNewEmployee/>
      {/* <DashboardMainHeader
        headerItems={headerItems}
        onSelectAllChange={handleCheckboxChange}
        isChecked={isChecked}
        checkboxStyles={checkboxStyles}
        headerMarginRightValues={headerMarginRightValues}
        className={className}
      />
      <DashboardCardList activeLabel={activeLabel} data={dataE} />  Render cards based on the active label */}
    </section>
  );
};

export default DashboardMain;
