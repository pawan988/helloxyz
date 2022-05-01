import React from "react";

import { Route, Switch } from "react-router";
import Home from "./Components/home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Service from "./Components/Services";

const App = () => {
  return(
  <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/Service" component={Service}/>
    </Switch>
  </>
  )
}
export default App;
