import React from "react";
import HomePage from "./pages/homepage";
import AboutUs from "./pages/AboutUsPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./pages/404notfound";

function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        {/* Other routes */}
        <Route exact path="/aboutus" element={<AboutUs/>}/>
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;