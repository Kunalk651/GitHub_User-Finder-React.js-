import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "../github/GithubContext";
import GithubReducer from "./GitHubReducer";
import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  SET_LOADING,
  GET_REPOS
} from "../Types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Get User
  const getUser = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_USER, payload: res.data });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Get Repos
  const getUserRepo = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepo
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
