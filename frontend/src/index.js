import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Questions from "./components/Questions";
import About from "./components/About";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const history = createBrowserHistory();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <Route path="/questions" component={Questions} />
      <Route path="/about" component={About} />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
