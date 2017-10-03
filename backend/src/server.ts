import * as express from 'express';

import { DbController } from './controllers/db.controller';
import { WarscrollController } from './controllers/warscroll.controller';
import { DbRoutes } from './routes/db.routes';
import { WarscrollRoutes } from './routes/warscroll.routes';
import * as bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 4242;

console.log("==> Setting up controllers...");

const dbController = new DbController();
const wsController = new WarscrollController();

console.log("==> Initializing routes...");

new DbRoutes(app, dbController);
new WarscrollRoutes(app, wsController);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.route("/db").get((req, res) => {
//     res.json(JSON.stringify("{greeting: 'Hello'}"));
// });

app.listen(port);

console.log('==> RESTful API server started on: ' + port);