import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Blogs from "./pages/Blogs";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import Teams from "./pages/Teams";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/blogs" element={<Blogs />} />
       </Routes>
    </BrowserRouter>  
  </React.StrictMode>
);
