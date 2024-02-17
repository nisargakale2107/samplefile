import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./pages/404notfound";

function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        {/* Other routes */}
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;