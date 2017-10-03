import * as fs from 'fs';

const dbRoot = __dirname + '/../db';
const db = "/db.json";

export const readFileAsync = (path?: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const p = dbRoot + (path ? path : db);
        fs.readFile(p, (error, data) => {
            if (error) reject(error);
            else resolve(data);
        })
    });
}
