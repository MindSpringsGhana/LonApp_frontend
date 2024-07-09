import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./_global.scss";
import Landing from "./GLOBAL/pages/LandingPage";

function App() {

    
    return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Landing />} />
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;