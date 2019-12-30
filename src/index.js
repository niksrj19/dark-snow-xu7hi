import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Logout from "./Logout";
import "./styles.css";
import DetailsPage from "./DetailsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/search" exact component={DetailsPage} />
          <Route path="/logout" exact component={Logout} />
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
