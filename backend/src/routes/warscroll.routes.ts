"use strict";

import * as express from 'express';
import { WarscrollController } from "../controllers/warscroll.controller";

export class WarscrollRoutes {
    constructor(app: express.Express, wsController: WarscrollController) {
        app.route('/ws/:name')
            .get(wsController.getWarscrollByName);
    }
}
