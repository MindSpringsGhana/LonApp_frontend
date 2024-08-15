import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../../styles/dashboard-main.scss";
import DashboardMainHeader from "../dashboard/dashboardMainHeader";
import {
  employeeHeaderMarginRightValues,
  customerHeaderMarginRightValues,
  employeeHeaderItems,
  customerHeaderItems,
} from "../../../../utils/dashboardData";
import Checkbox from "../../formInputs/checkbox";
import DashboardCardList from "./dashboardCardList";  // Import the new CardList component
import classNames from "classnames";

const DashboardMain = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxStyles = { marginRight: "10px" };
  const activeLabel = useSelector((state) => state.dashboard.activeLabel); // Get the active label from Redux

  const employeeData = [
    {
      employeeID: "000001",
      name: "Davida Dzato",
      email: "davidadzato45@gmail.com",
      contact: "0245224993",
      gender: "Female",
      jobTitle: "Secretary",
      modulePermissions: ["QA Teams", "Contractors", "Billing", "+4"],
    },
    {
      employeeID: "000002",
      name: "John Doe",
      email: "johndoe2211@gmail.com",
      contact: "0245224993",
      gender: "Male",
      jobTitle: "Secretary",
      modulePermissions: ["QA Teams", "Contractors", "Billing", "+4"],
    },
  ];

  const customerData = [
    {
      customerID: "000001",
      name: "Vida Willams",
      contact: "0245224993",
      gender: "Female",
      email: "VidaWills2211@gmail.com",
      address: "GW-120-7878",
    },
    {
      customerID: "000002",
      name: "John Doe",
      contact: "0245224993",
      gender: "Male",
      email: "johndoe2211@gmail.com",
      address: "GW-120-7878",
    },
  ];

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  let headerItems, data, headerMarginRightValues, className;

  // Determine which header and data to use based on the activeLabel
  switch (activeLabel) {
    case "Employee":
      headerItems = employeeHeaderItems;
      data = employeeData;
      headerMarginRightValues = employeeHeaderMarginRightValues;
      className = "employee-header"
      break;
    case "Customers":
      headerItems = customerHeaderItems;
      data = customerData;
      headerMarginRightValues = customerHeaderMarginRightValues;
      className = "customer-header"
      break;
    // Add more cases if you have more nav items
    default:
      headerItems = [];
      data = [];
      headerMarginRightValues = [];
  }

  return (
    <section className="dashboard-main-section">
      <DashboardMainHeader
        headerItems={headerItems}
        onSelectAllChange={handleCheckboxChange}
        isChecked={isChecked}
        checkboxStyles={checkboxStyles}
        headerMarginRightValues={headerMarginRightValues}
        className={className}
      />
      <DashboardCardList activeLabel={activeLabel} data={data} />  {/* Render cards based on the active label */}
    </section>
  );
};

export default DashboardMain;
