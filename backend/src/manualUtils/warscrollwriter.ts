"use strict";

import * as se from './stormcasteternals';
import * as dot from './desciplesoftzeentch';

const fs = require('fs');
const mkdirp = require('mkdirp');

const dbRoot = __dirname + '/../../db';
const db = "/db.json";

const readFileAsync = (path?: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const p = dbRoot + (path ? path : db);
        fs.readFile(p, (error: any, data: any) => {
            if (error) reject(error);
            else resolve(data);
        })
    });
}

const writeFileAsync = (path: string, name: string, text: string) => {
    return new Promise(async (resolve, reject) => {

        const db = JSON.parse(await readFileAsync());
        // create subpath for future file
        if (!fs.existsSync(path)) {
            mkdirp(dbRoot + path);
        }

        const items = db._items || 0;
        db._items = items + 1;
        db[name] = path;
        
        await writeDb(JSON.stringify(db, null, 4));

        fs.writeFile(`${dbRoot}/${path}/${name}.json`, text, (err: any) => {
            if(err) reject(err);
            else resolve();
        })
    });
}

const writeDb = (db: string) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`${dbRoot}/db.json`, db, (err: any) => {
            if(err) reject(err);
            else resolve();
        });
    });
}

(async () => {
    // read db
    const db = JSON.parse(await readFileAsync());
    console.log(db);
    
    // write 
    await writeFileAsync(se.dbPath, se.lordCelestant.title, JSON.stringify(se.lordCelestant, null, 4));
    await writeFileAsync(dot.dbPath, dot.tzaangorEnlightened.title, JSON.stringify(dot.tzaangorEnlightened, null, 4));
    await writeFileAsync(dot.dbPath, dot.lordOfChange.title, JSON.stringify(dot.lordOfChange, null, 4));
})();