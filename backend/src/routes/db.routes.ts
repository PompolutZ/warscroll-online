"use strict";

import * as express from 'express';
import { DbController } from "../controllers/db.controller";

export class DbRoutes {
    constructor(app: express.Express, dbController: DbController) {
        app.route('/db')
            .get(dbController.list)
            .post(dbController.list);
    }
}

