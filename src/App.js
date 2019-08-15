import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import NotFound from "./components/pages/404";

const App = () => {
  // useEffect(() => {
  //   setLoading({ loading: true });
  //   const res = axios.get(
  //     `https://api.github.com/users?client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   setUsers({ users: res.data, loading: false });
  // }, []);
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
