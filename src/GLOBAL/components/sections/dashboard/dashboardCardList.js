// src/components/cards/CardList.js

import React from "react";
import EmployeeCard from "../../cards/employeeCard";
import CustomerCard from "../../cards/customerCard";

const DashboardCardList = ({ activeLabel, data }) => {
  if (activeLabel === "Employee") {
    return data.map((employee, index) => (
      <EmployeeCard key={index} employee={employee} />
    ));
  }

  if (activeLabel === "Customers") {
    return data.map((customer, index) => (
      <CustomerCard key={index} customer={customer} />
    ));
  }

  // Add more conditions here if you have more types of cards to render
  return null;
};

export default DashboardCardList;
