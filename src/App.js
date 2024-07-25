import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./_global.scss";
import Landing from "./GLOBAL/pages/LandingPage";
import LoginPage from "./GLOBAL/pages/loginPage";
import ResetPasswordPage from "./GLOBAL/pages/resetPasswordPage";
import ResetPasswordConfirmPage from "./GLOBAL/pages/resetPasswordConfirmPage";
function App() {

    
    return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Landing />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/reset-password" element={<ResetPasswordPage/>}/>
            <Route path="/reset-password-confirm" element={<ResetPasswordConfirmPage/>}/>
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;