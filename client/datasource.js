import { RESTDataSource } from "apollo-datasource-rest";

export class ThingsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:8080/";
  }

  async getQuestions() {
    return this.get("dave/questions");
  }
}
