import React from "react";
import auth from "./auth";
import Graph from './Components/AppLayout/Graph.js'

export const AppLayout = props => {
  return (
    <div>
      <h1>APP LAYOUT</h1>
      <Graph />
      <br />
      <br />
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};
