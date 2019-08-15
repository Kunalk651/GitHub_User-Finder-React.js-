import React, { Fragment } from "react";
import spinner from "./ajax-loader.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="Loading..."
      style={{
        width: "100px",
        margin: "auto",
        display: "block",
        marginTop: "200px"
      }}
    />
  </Fragment>
);

export default Spinner;
