import * as fs from 'fs';

const dbRoot = __dirname + '/../db';
const db = "/db.json";

export const readFileAsync = (path?: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const p = dbRoot + (path ? path : db);
        console.log("==> Trying to read from path: ", p);

        fs.readFile(p, (error, data) => {
            if (error) {
                console.log("Error reading file: ", error);
                reject(error);
            }
            else resolve(data);
        })
    });
}
