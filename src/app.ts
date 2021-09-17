import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

import { connect } from "./schemas/index";

import { exampleRouter } from "./routers/example";

const port = 5000;
const app = express();
connect();

const parseForm = bodyParser.urlencoded({ extended: false });

app.use(parseForm);
app.use(express.json());
app.use(bodyParser.json());

app.use("/", [ exampleRouter ]);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});