import express, { json } from "express";
import 'express-async-errors';
import { errorHandler } from "./middlewares/errorHandler";
import { SignupRouter } from "./routes";
const test  = require("@guru/common-utils");

const app = express();

app.use(json());
app.use(SignupRouter)
app.use(errorHandler);
app.listen("3000", () => {
    test();
    console.log(`running on sport 3000`)
});

export default app;
