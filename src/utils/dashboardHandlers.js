// File: handleItemClick.js
import {
  employeeHeaderItems,
  employeeHeaderMarginRightValues,
  customerHeaderItems,
  customerHeaderMarginRightValues,
  data
} from "./dashboardData";
export const handleItemClick = (
  index,
  setActiveIndex,
  firstNavItemsLength,
  isLastSection = false
) => {
  const newIndex = isLastSection ? firstNavItemsLength + index : index; // Calculate the new index
  setActiveIndex(newIndex); // Update the activeIndex state
};

export const getDashboardConfig = (activeLabel) => {
  switch (activeLabel) {
    case "Employee":
      return {
        headerItems: employeeHeaderItems,
        dataE: data.employeeData, // Pass employee data
        headerMarginRightValues: employeeHeaderMarginRightValues,
        className: "employee-header",
      };

    case "Customers":
      return {
        headerItems: customerHeaderItems,
        dataE: data.customerData, // Pass customer data
        headerMarginRightValues: customerHeaderMarginRightValues,
        className: "customer-header",
      };

    // Add more cases if you have more nav items
    default:
      return {
        headerItems: [],
        data: [],
        headerMarginRightValues: [],
        className: "",
      };
  }
};
