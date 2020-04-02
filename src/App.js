import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import UsersSection from "./components/users/UsersSection";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div>
        <Navbar title="GitHub Finder" icon="fab fa-github " />
        <div className="container">
          <UsersSection loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
