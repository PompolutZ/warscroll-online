"use strict";
import * as express from "express";
import { readFileAsync } from "../filedb";


export class WarscrollController {
    async getWarscrollByName(req: express.Request, res: express.Response) {
        try {
            const db = JSON.parse(await readFileAsync());
            const warscrollPath = db[req.params.name];
            console.log(warscrollPath);
            const warscroll = JSON.parse(await readFileAsync(warscrollPath));
            res.json(warscroll);
        } catch (error) {
            res.status(404).send(`Error reading file: ${error}`);
        }
    }
}