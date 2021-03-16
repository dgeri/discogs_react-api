import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Search from "./Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Favorites from "./Favorites";

function App() {
  return (
    <div>
      <Router>
        <div className="app-main">
          <Nav />
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/search" component={Search} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/search/:id" component={ItemDetail} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
