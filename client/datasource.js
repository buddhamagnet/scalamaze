import { RESTDataSource } from "apollo-datasource-rest";

export class ThingsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:8080/";
  }

  async getThings(format = "all") {
    return this.get(`dave/${format}`);
  }
}
