import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPhotoNest from "./pages/ProjectPhotoNest/ProjectPhotoNest";
import ProjectPhotoNestV2 from "./pages/ProjectPhotoNestV2/ProjectPhotoNestV2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LandingPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projectone" element={<ProjectPhotoNest />}></Route>
          <Route path="/projecttwo" element={<ProjectPhotoNestV2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
