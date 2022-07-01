import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function MainPage(props) {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
}

export default MainPage;
