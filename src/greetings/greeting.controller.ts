import express from "express";
import { Request, Response } from "express";
import Greeting from "./greeting.interface";

class GreetingController {
  constructor(app: express.Application) {
    app.get("/greeting", this.getGreeting);
  }

  private getGreeting = (req: Request, res: Response) => {
    const greeting: Greeting = {
      salutation: "Hello",
      source: "Node.js server",
      techStack: "Typescript & Express",
    };
    res.send(greeting);
  };
}

export default GreetingController;
