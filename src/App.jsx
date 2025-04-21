import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./Layout/Layout";
import Home from "./Component/Home/Home";

function App() {
  return (
    <HashRouter> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
