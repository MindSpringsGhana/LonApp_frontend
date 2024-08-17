import React, { useState } from "react";
import { useSelector } from "react-redux";
import DashboardMainHeader from "./dashboardMainHeader";
import { getDashboardConfig } from "../../../../utils/dashboardHandlers";
import DashboardCardList from "./dashboardCardList";  // Import the new CardList component


const DashboardItemList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxStyles = { marginRight: "10px" };
  const activeLabel = useSelector((state) => state.dashboard.activeLabel); // Get the active label from Redux


  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const {headerItems, dataE, headerMarginRightValues, className} = getDashboardConfig(activeLabel);
  console.log(dataE)
  return (
    <>
      <DashboardMainHeader
        headerItems={headerItems}
        onSelectAllChange={handleCheckboxChange}
        isChecked={isChecked}
        checkboxStyles={checkboxStyles}
        headerMarginRightValues={headerMarginRightValues}
        className={className}
      />
      <DashboardCardList activeLabel={activeLabel} data={dataE} />  
    </>
  );
};

export default DashboardItemList;
