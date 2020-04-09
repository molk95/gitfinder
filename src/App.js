import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import UsersSection from "./components/users/UsersSection";

import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  render() {
    return (
      <div>
        <Navbar title="GitHub Finder" icon="fab fa-github " />
        <Search searchUsers={this.searchUsers} />
        <div className="container">
          <UsersSection loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
