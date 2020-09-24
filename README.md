## SCALAMAZE

This codebase represents my efforts to put together a GraphQL server
pulling data from a Scala server with zero Scala experience. I timeboxed
the Scala side to an hour and went with the Cask framework serving up
a set of questions or items about me in JSON format.

### TO RUN

* Go into the server folder and run ```./mill -w app.runBackground```.
* This will take some time on first run to download the build tool.
* Navigate to ```http://localhost:8080/dave/questions```.
* Navigate to ```http://localhost:8080/dave/about```.
* Go into the client folder and run ```yarn && yarn start```.
* Navigate to ```localhost:5000``` and check the GraphQL playground.

### IN PROGRESS

* Containerising all the things with ```Docker```.