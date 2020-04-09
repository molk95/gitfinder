import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import UsersSection from "./components/users/UsersSection";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import axios from "axios";
import "./App.css";


class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg,
        type,
      },
    });

    setTimeout(
      () =>
        this.setState({
          alert: null,
        }),
      1500
    );
  };

  render() {
    const { users, loading, alert } = this.state;

    return (
      <div>
        <Navbar title="GitHub Finder" icon="fab fa-github " />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />

                  <UsersSection loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
