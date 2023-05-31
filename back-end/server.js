import * as fs from 'node:fs/promises';
import express from 'express';
import https from 'node:https';


const options = {
    key: await fs.readFile('ca/key.pem'),
    cert: await fs.readFile('ca/cert.pem'),
};

const app = express();

const router = express.Router();
app.use('/', router);

const server = https.createServer(options, app);



export default server;