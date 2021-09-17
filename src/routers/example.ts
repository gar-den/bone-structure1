import express, { Request, Response, NextFunction, Router } from "express";
import { IExample } from "../interfaces/example";
import Examples from "../schemas/example";

const exampleRouter = express.Router();

exampleRouter.post("/short-links", async (req, res) => {
    try {    
        res.json({  });
    } catch (error) {
        res.json({  });
    }
});

export { exampleRouter };