import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Login2 from "./Login2";
import Logout from "./Logout";
import "./styles.css";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login2} />
          <Route path="/search" exact component={SearchPage} />
          <Route path="/logout" exact component={Logout} />
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
