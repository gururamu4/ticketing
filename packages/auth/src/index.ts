import express, { json } from "express";
import "express-async-errors";
import { errorHandler } from "./middlewares/errorHandler";
import { SignupRouter } from "./routes";
const test  = require("@guru/common-utils");
import mongoose from "mongoose";

const app = express();

app.use(json());
app.use(SignupRouter);
app.use(errorHandler);

// mongoose.connect('mongodb://auth-mongo-srv:27017/auth')
const start = async() => {
  try {
    await mongoose.connect(`mongodb://auth-mongo-srv:27017/auth`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to mongo");
  } catch (err) {
    console.error(err);
  }

  app.listen("3000", () => {
    test.test();
    console.log(`running on sport 3000`);
  });
};

start();

export default app;
