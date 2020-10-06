import express from "express";

class App {
  public app: express.Application;
  constructor() {
    this.app = express();

    this.app.get("/", function (req, res) {
      res.send("Hello world from Typescript via Node.js and Express.js!!");
    });
  }
}

export default new App().app;
