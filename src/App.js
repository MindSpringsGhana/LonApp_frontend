import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./_global.scss";
import Landing from "./GLOBAL/pages/LandingPage";
import LoginPage from "./GLOBAL/pages/auth/LoginPage.js";
import SignUpPage from "./GLOBAL/pages/auth/signUpPage.js";
import ResetPasswordPage from "./GLOBAL/pages/auth/resetPasswordPage";
import ResetPasswordConfirmPage from "./GLOBAL/pages/auth/resetPasswordConfirmPage";
import DashBoardPage from "./GLOBAL/pages/dashboardPage.js";
import DashboardMain from "./GLOBAL/components/sections/dashboard/dashboardMain.js";
import AddNewEmployee from "./GLOBAL/components/sections/dashboard/addNewEmployee.js";
import DashboardItemList from "./GLOBAL/components/sections/dashboard/dashboardItemList.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route
          path="/reset-password-confirm"
          element={<ResetPasswordConfirmPage />}
        />
         <Route path="/dashboard" element={<DashBoardPage />}>
          <Route path="add-new-employee" element={<AddNewEmployee />} />
          {/* <Route path="employee-list" element={<DashboardItemList />} /> */}
          <Route path="customers-list" element={<DashboardItemList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
