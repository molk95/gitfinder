import React from "react";
import UserCard from "./UserCard";
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types';

const UsersSection = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

UsersSection.propTypes = {
    users:PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default UsersSection;
