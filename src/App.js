import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import {Step1 } from "./components/Step1"
import {Result} from "./components/Result"


function App() {
  return (
    <Router>
      <Route exact path="/" component={Step1} /> 
      <Route path="/result" component={Result} /> 
    </Router>
  )
}

export default App;
