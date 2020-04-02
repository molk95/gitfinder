import React, { Component } from "react";
import UserCard from "./UserCard"

class UsersSection extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
      },
      {
        id: "2",
        login: "pjhyett",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/pjhyett"
      },
      {
        id: "3",
        login: "wycats",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/wycats"
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const userStyle ={
    display:"grid",
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'1rem'
}

export default UsersSection;
