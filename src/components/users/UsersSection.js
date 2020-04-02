import React, { Component } from "react";
import UserCard from "./UserCard";

class UsersSection extends Component {

  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default UsersSection;
