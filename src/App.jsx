import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectListPage from "./pages/ProjectListPage/ProjectListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/project/:id" element={<ProjectListPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
