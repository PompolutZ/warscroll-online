"use strict";
import * as express from "express";
import { readFileAsync } from "../filedb";

export class DbController {
    async list(req: express.Request, res: express.Response) {
        try {
            const file = await readFileAsync();
            res.json(JSON.parse(file));
        } catch (error) {
            res.status(404).send(`Error reading file: ${error}`);
        }
    }
}