import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Invoice from "./components/Invoice";

import product from "./components/Product";
import Reports from "./components/Reports";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={Invoice} />
        <Route path="/product" component={product} />
        <Route path="/reports" component={Reports} />
      </div>
    </Router>

  );
}

export default App;
