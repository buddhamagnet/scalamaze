## SCALAMAZE

This codebase represents my efforts to put together a GraphQL server
pulling data from a Scala server with zero Scala experience. I timeboxed
the Scala side to an hour and went with the Cask framework serving up
a set of questions or items about me in JSON format.

I also decided to throw in a React front end that uses hooks (no classes).

### TO RUN

* Go into the server folder and run ```./mill -w app.runBackground```.
* This will take some time on first run to download the build tool.
* Go into the client folder and run ```yarn && yarn start```.
* Go into the frontend folder and run ```yarn && yarn start```.
* Navigate to ```localhost:3000/about``` to find out about me.
* Navigate to ```localhost:3000/questions``` for some (light-hearted) questions.
* Navigate to ```localhost:5000``` and check the GraphQL playground:

Some questions:

```js
query Questions {
  things(format: "questions") {
    text
  }
}
```

Some things about me:

```js
query Abut {
  things(format: "about") {
    text
  }
}
```

### TOOLS USED

* [mill](https://github.com/lihaoyi/mill) - Scala build tool.
* [cask](https://www.lihaoyi.com/cask) - minimal Scala web framework.
* [esm](https://github.com/standard-things/esm#readme) - simple JS module loader.
* [apollo-server](https://github.com/apollographql/apollo-server) - GraphQL server.
* [apollo-datasource-rest](https://www.npmjs.com/package/apollo-datasource-rest) - Apollo server REST API integration.
* [@apollo/client](https://github.com/apollographql/apollo-client) - Apollo client, used in React front end.
* [graphql-tag](https://github.com/apollographql/graphql-tag) - used for GraphQL tags in React front end.

### IN PROGRESS

* Containerizing all the things with ```Docker```.