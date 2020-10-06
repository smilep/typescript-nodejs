import express from "express";
import GreetingController from "./greetings/greeting.controller";

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    new GreetingController(this.app);
  }
}

export default new App().app;
