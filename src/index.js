import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import "./styles.css";
import ls from "local-storage";
import DetailsPage from "./DetailsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/search" exact component={DetailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
