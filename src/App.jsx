import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PageNotFound from "./PageNotFound";
import Header from "./Header";
import TaskPage from "./TaskPage";

import MainPage from "./MainPage";
import Home from "./Home";
import CompletedTask from "./CompletedTask";
import Task from "./Components/Task";

function App() {
  const myTask = {
    title: "Bring Milk",
    done: true,
  };
  return (
    <div>
      <Task task={myTask}></Task>
    </div>
  );
}

export default App;
