import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const { searchUsers, clearUsers, users } = githubContext;

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlerts("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search User..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button
          type="submit"
          className="btn btn-light btn-block"
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
