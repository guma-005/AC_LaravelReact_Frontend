import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../Login/Login";
import RegisterTeacher from "../RegisterTeacher/RegisterTeacher";
import App from "../../App";

const Home = () => {
  return (
    <Routes>
       <Route path={"/login"} element={<Login />} exact /> 
      <Route path={"/app"} element={<App />} />
      <Route path={"/"} element={<Login />} exact />
      <Route path={"/register"} element={<RegisterTeacher />} />
    </Routes>
  );
};

export default Home;
