// File: navItems.js

import {
  dashboardCreateIcon,
  dashboardHomeIcon,
  dashboardUserIcon,
  dashboardDeliveryIcon,
  dashboardFeedbackIcon,
  dashboardReportIcon,
  dashboardInventoryIcon,
  dashboardLogoutIcon,
  dashboardNotificationIcon,
  dashboardSettingsIcon,
  dashboardHelpIcon,
  billingAndInvoicing,
  dashboardBillPaymentIcon
} from "./assets";

export const firstNavItems = [
  { label: "Dashboard", icon: dashboardCreateIcon },
  { label: "Laundry Bags", icon: dashboardHomeIcon },
  { label: "Customers", icon: dashboardUserIcon },
  { label: "Service", icon: dashboardUserIcon },
  { label: "Inventory", icon: dashboardInventoryIcon },
  { label: "Billing & Payment", icon: dashboardBillPaymentIcon },
  { label: "Employee", icon: dashboardUserIcon },
  { label: "Report", icon: dashboardReportIcon },
  { label: "Delivery & Pickup", icon: dashboardDeliveryIcon },
  { label: "Feedback & Support", icon: dashboardFeedbackIcon },
];

export const lastNavItems = [
  { label: "Logs", icon: dashboardCreateIcon },
  { label: "Notifications", icon: dashboardNotificationIcon },
  { label: "Help", icon: dashboardHelpIcon },
  { label: "Settings", icon: dashboardSettingsIcon },
  { label: "Logout", icon: dashboardLogoutIcon },
];


//dashboard main header items

export const employeeHeaderItems = [
  "Employee ID",
  "Image",
  "Name",
  "Email",
  "Contact",
  "Gender",
  "Job Title",
  "Module Permission",
];

export const customerHeaderItems = [
  "Customer ID",
  "Image",
  "Name",
  "Contact",
  "Email",
  "Gender",
  "Address",
];

// main header margin styles 
export const employeeHeaderMarginRightValues = [
    
  "27px", // Employee ID
  "45px", // Image
  "95px", // Name
  "76px", // Email
  "51px", // Contact
  "41px", // Gender
  "89px", // Job Title
];

export const customerHeaderMarginRightValues = [
  "63px",
  "88px",
  "50px",
  "106px",
  "150px",
  "108px",
]

//employee card margin styles

export const employeeMarginRightValues = [
  "10px",
  "67px",
  "46px",
  "46px",
  "0px",
  "18px",
  "32.92px",
  "36px"
]

// Define the data for different nav items
export const data = {
  employeeData: [
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
  ],
  customerData: [
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
  ],
};