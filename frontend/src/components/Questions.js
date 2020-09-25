import React from "react";
import { useQuery, gql } from "@apollo/client";

import logo from "../logo.svg";
import "../App.css";

const QUESTIONS = gql`
  query Questions {
    things(format: "questions") {
      text
    }
  }
`;

const Questions = () => {
  const { loading, error, data } = useQuery(QUESTIONS);

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

export default Questions;
