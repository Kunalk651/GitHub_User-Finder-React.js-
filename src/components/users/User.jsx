import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/GithubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, loading, getUser, getUserRepo, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepo(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt="Loding..."
            className="round-img"
            style={{ width: "150px" }}
          />
          <h2>{name}</h2>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visite GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  <a href={blog} style={{ color: "black" }}>
                    {blog}
                  </a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers:{followers}</div>
        <div className="badge badge-light">Following:{following}</div>
        <div className="badge badge-warning">Public Repo:{public_repos}</div>
        <div className="badge badge-success">Public Gists:{public_gists}</div>
      </div>
      <h1>Repositories:</h1>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
