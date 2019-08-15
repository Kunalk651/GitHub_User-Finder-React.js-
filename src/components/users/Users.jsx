import React, { useContext } from "react";
import UserItem from "./UserItems";
import Spinner from "../layouts/Spinner";
import GithubContext from "../../context/github/GithubContext";

const Users = () => {
  const githubContet = useContext(GithubContext);

  const { users, loading } = githubContet;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="user-style">
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
