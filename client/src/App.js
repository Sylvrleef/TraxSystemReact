import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./pages/admin";
import Business from "./pages/business";
import CreateRequest from "./pages/createRequest";
import Fiscal from "./pages/fiscal";
import Initiator from "./pages/initiator";
import Login from "./pages/login";
import AddVendor from "./pages/addVendor"
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/request" component={CreateRequest} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/fiscal" component={Fiscal} />
        <Route exact path="/initiator" component={Initiator} />
        {/* <Route exact path="/vendorrequest" component={AddVendorRequest} /> */}
        <Route exact path="/addvendor" component={AddVendor} />
      </Switch>
    </div>
  </Router>
);

export default App;
