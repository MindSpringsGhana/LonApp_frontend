import React, { useState } from "react";
import { useSelector } from "react-redux";
import DashboardMainHeader from "./dashboardMainHeader";
import { getDashboardConfig } from "../../../../utils/dashboardHandlers";
import DashboardCardList from "./dashboardCardList"; // Import the new CardList component

const DashboardItemList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxStyles = { marginRight: "10px" };
  const activeLabel = useSelector((state) => state.dashboard.activeLabel); // Get the active label from Redux

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const { headerItems, dataE, headerMarginRightValues, className } =
    getDashboardConfig(activeLabel);
  console.log(dataE);
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
      <div className="dashboarditemlist-pagination row">
        <div className="pagination-left-content">
          <p className="pagination-title">
            Showing data 1 to 8 of 256K entries
          </p>
        </div>
        <div className="pagination-right-content row">
          <button className="prev-page-button"> <p className="vector-size">{"<"}</p> </button>
          <button className="page-button active"><p className="page-number">1</p></button>
          <button className="page-button"><p className="page-number">2</p></button>
          <button className="page-button"><p className="page-number">3</p></button>
          <button className="next-page-button"><p className="vector-size">{">"}</p></button>
        </div>
      </div>
    </>
  );
};

export default DashboardItemList;
