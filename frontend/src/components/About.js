import React from "react";
import { useQuery, gql } from "@apollo/client";

import logo from "../logo.svg";
import "../App.css";

const ABOUT = gql`
  query about {
    things(format: "about") {
      text
    }
  }
`;

const About = () => {
  const { loading, error, data } = useQuery(ABOUT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.things.map(({ text }) => (
          <div key={text}>
            <p>{text}</p>
          </div>
        ))}
      </header>
    </div>
  );
};

export default About;
