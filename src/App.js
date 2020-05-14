import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SignIn from "./components/auth/SignIn";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardError from "./components/dashboard/DashboardError";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={SignIn} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dashboarderror" component={DashboardError} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
