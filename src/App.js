import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route path="/services" exact component={Services} />
            <Route path="/products" exact component={Products} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/" exact component={Home} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
