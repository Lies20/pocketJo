import * as fs from 'node:fs/promises';
import sportsRouter from "./routes/sportsRouter.js";
import epreuvesRouter from './routes/epreuvesRouter.js';
import cors from "cors";
import express from 'express';
// import https from 'node:https';


// const options = {
//     key: await fs.readFile('ca/key.pem'),
//     cert: await fs.readFile('ca/cert.pem'),
// };

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/sports', sportsRouter)
app.use('/api/epreuves', epreuvesRouter)

app.listen(3001);

// const server = https.createServer(options, app);


