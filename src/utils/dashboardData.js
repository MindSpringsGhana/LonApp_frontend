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

// export const firstNavItems = [
//   { label: "Dashboard", icon: dashboardCreateIcon, subNav: [{label: "Overview of Operations"}, {label: "Key Performance Indicators"}, {label: "Quick Links to Common Task"}] },
//   { label: "Laundry Bags", icon: dashboardHomeIcon, subNav: [{label: "New Laundry Bag"}, {label: "Process Laundry Bag"}, {label: "Laundry Bag History"}, {label: "Track Laundry Bags"}] },
//   { label: "Customers", icon: dashboardUserIcon, subNav: [{label: "Customers List"}, {label: "Add New Customers"}, {label: "Customer Profiles"}, {label: "Customer Feedback"}] },
//   { label: "Service", icon: dashboardUserIcon, subNav: [{label: "Service List"}, {label: "Add New Service"}, {label: "Pricing"}, {label: "Promotion/Discounts"}] },
//   { label: "Inventory", icon: dashboardInventoryIcon, subNav: [{label: "Manage Inventory"}, {label: "Add New Items"}, {label: "Stock Level"}, {label: "Suppliers"}] },
//   { label: "Billing & Payment", icon: dashboardBillPaymentIcon, subNav: [{label: "Invoices"}, {label: "Payment History"}, {label: "Pending Payment"}, {label: "Payment Methods"}] },
//   { label: "Employee", icon: dashboardUserIcon, subNav: [{label: "Employee List"}, {label: "Add New Employee"}, {label: "Work Schedules"}, {label: "Payroll"}] },
//   { label: "Report", icon: dashboardReportIcon, subNav: [{label: "Sales Reports"}, {label: "Customer Reports"}, {label: "Inventory Reports"}, {label: "Financial Reports"}] },
//   { label: "Delivery & Pickup", icon: dashboardDeliveryIcon, subNav: [{label: "Manage Appointments"}, {label: "Schedule New Appointment"}, {label: "Appointment Calendar"}] },
//   { label: "Feedback & Support", icon: dashboardFeedbackIcon, subNav: [{label: "Customer Feedback"}, {label: "Support Tickets"}, {label: "FAQ"}] },
// ];

// export const lastNavItems = [
//   { label: "Logs", icon: dashboardCreateIcon, subNav: [{label: "Activity Logs"}, {label: "Audit Logs"} ] },
//   { label: "Notifications", icon: dashboardNotificationIcon, subNav: [{label: "View Notification"}, {label: "Notification Settings"} ] },
//   { label: "Help", icon: dashboardHelpIcon, subNav: [{label: "User Guide"}, {label: "Contact Support"} ] },
//   { label: "Settings", icon: dashboardSettingsIcon, subNav: [{label: "General Settings"}, {label: "User Management"}, {label: "Roles & Permissions"}] },
//   { label: "Logout", icon: dashboardLogoutIcon },
// ];

export const firstNavItems = [
  {
    label: "Dashboard",
    icon: dashboardCreateIcon,
    subNav: [
      { label: "Overview of Operations", link: "/overview-of-operations" },
      { label: "Key Performance Indicators", link: "/key-performance-indicators" },
      { label: "Quick Links to Common Task", link: "/quick-links-to-common-task" }
    ]
  },
  {
    label: "Laundry Bags",
    icon: dashboardHomeIcon,
    link: "/new-laundry-bag",
    subNav: [
      { label: "New Laundry Bag", link: "/new-laundry-bag" },
      { label: "Process Laundry Bag", link: "/process-laundry-bag" },
      { label: "Laundry Bag History", link: "/laundry-bag-history" },
      { label: "Track Laundry Bags", link: "/track-laundry-bags" }
    ]
  },
  {
    label: "Customers",
    link: "/customers-list",
    icon: dashboardUserIcon,
    subNav: [
      { label: "Customers List", link: "/customers-list" },
      { label: "Add New Customers", link: "/add-new-customers" },
      { label: "Customer Profiles", link: "/customer-profiles" },
      { label: "Customer Feedback", link: "/customer-feedback" }
    ]
  },
  {
    label: "Service",
    icon: dashboardUserIcon,
    subNav: [
      { label: "Service List", link: "/service-list" },
      { label: "Add New Service", link: "/add-new-service" },
      { label: "Pricing", link: "/pricing" },
      { label: "Promotion/Discounts", link: "/promotion-discounts" }
    ]
  },
  {
    label: "Inventory",
    icon: dashboardInventoryIcon,
    subNav: [
      { label: "Manage Inventory", link: "/manage-inventory" },
      { label: "Add New Items", link: "/add-new-items" },
      { label: "Stock Level", link: "/stock-level" },
      { label: "Suppliers", link: "/suppliers" }
    ]
  },
  {
    label: "Billing & Payment",
    icon: dashboardBillPaymentIcon,
    subNav: [
      { label: "Invoices", link: "/invoices" },
      { label: "Payment History", link: "/payment-history" },
      { label: "Pending Payment", link: "/pending-payment" },
      { label: "Payment Methods", link: "/payment-methods" }
    ]
  },
  {
    label: "Employee",
    icon: dashboardUserIcon,
    link: "/employee-list",
    subNav: [
      { label: "Employee List", link: "/employee-list" },
      { label: "Add New Employee", link: "/add-new-employee" },
      { label: "Work Schedules", link: "/work-schedules" },
      { label: "Payroll", link: "/payroll" }
    ]
  },
  {
    label: "Report",
    icon: dashboardReportIcon,
    subNav: [
      { label: "Sales Reports", link: "/sales-reports" },
      { label: "Customer Reports", link: "/customer-reports" },
      { label: "Inventory Reports", link: "/inventory-reports" },
      { label: "Financial Reports", link: "/financial-reports" }
    ]
  },
  {
    label: "Delivery & Pickup",
    icon: dashboardDeliveryIcon,
    subNav: [
      { label: "Manage Appointments", link: "/manage-appointments" },
      { label: "Schedule New Appointment", link: "/schedule-new-appointment" },
      { label: "Appointment Calendar", link: "/appointment-calendar" }
    ]
  },
  {
    label: "Feedback & Support",
    icon: dashboardFeedbackIcon,
    subNav: [
      { label: "Customer Feedback", link: "/customer-feedback" },
      { label: "Support Tickets", link: "/support-tickets" },
      { label: "FAQ", link: "/faq" }
    ]
  }
];

export const lastNavItems = [
  {
    label: "Logs",
    icon: dashboardCreateIcon,
    subNav: [
      { label: "Activity Logs", link: "/activity-logs" },
      { label: "Audit Logs", link: "/audit-logs" }
    ]
  },
  {
    label: "Notifications",
    icon: dashboardNotificationIcon,
    subNav: [
      { label: "View Notification", link: "/view-notification" },
      { label: "Notification Settings", link: "/notification-settings" }
    ]
  },
  {
    label: "Help",
    icon: dashboardHelpIcon,
    subNav: [
      { label: "User Guide", link: "/user-guide" },
      { label: "Contact Support", link: "/contact-support" }
    ]
  },
  {
    label: "Settings",
    icon: dashboardSettingsIcon,
    subNav: [
      { label: "General Settings", link: "/general-settings" },
      { label: "User Management", link: "/user-management" },
      { label: "Roles & Permissions", link: "/roles-permissions" }
    ]
  },
  { label: "Logout", icon: dashboardLogoutIcon } // No link needed for Logout
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