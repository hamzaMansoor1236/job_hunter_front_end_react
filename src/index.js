import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

//For routing purpose
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Components/Home/Home";
import NotFound from "./Components/Not Found/NotFound";
import UserLogin from "./Components/Login/UserLogin";

import HrLogin from "./Components/Login/HrLogin";

import UserSignUp from "./Components/SignUp/UserSignUp";
import HRSignUp from "./Components/SignUp/HrSignUp";


import HRDashboard from "./Components/Dashboard/HrDashboard/ParentComponent/HrDashboard";
import UserDashboard from "./Components/Dashboard/UserDashboard/ParentComponent/UserDashBoard";

//root element of the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Routes of the application  */}
    <BrowserRouter>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home></Home>}></Route>
        {/* ////////////////////////////////////////////// */}
        {/* User Routes */}
        <Route path="/UserSignUp" element={<UserSignUp></UserSignUp>}></Route>
        <Route path="/UserLogin" element={<UserLogin></UserLogin>}></Route>
        <Route
          path="/UserDashboard"
          element={<UserDashboard></UserDashboard>}
        ></Route>
        

        {/* /////////////////////////////////////////////// */}
        {/* HR routes */}
        <Route path="/HRLogin" element={<HrLogin></HrLogin>}></Route>
        <Route path="/HRsignup" element={<HRSignUp></HRSignUp>}></Route>

        <Route
          path="/HRDashboard"
          element={<HRDashboard></HRDashboard>}
        ></Route>
        {/* //////////////////////////////////////////////// */}

        {/* Not found Route */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
        {/* //////////////////////////////////////////////// */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
