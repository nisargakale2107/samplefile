import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./pages/404notfound";
import Home from "./pages/Home";
import Artist from "./pages/Artist";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
       
        <Route exact path="*" element={<NotFound/>}/>
        <Route exact path="/Artist" element={<Artist/>}/>
      </Routes>
    </Router>
  );
}

export default App;