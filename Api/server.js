// Aplication program interface
// Get(read), Post(Create), Put(Update), Delete(delete) - CRUD

import  express from "express";
import cors from "cors"; //middleware
import {db} from './connect.js';


const app = express();
const PORT = 3000;


app.use(cors());


app.get("/", (req, res) => {
    res.send("Só vamos trabalhar com os endpoints /artists e /songs");
});

app.get("/artists", async (req, res) => {
    res.send(await db.collection('Artists').find({}).toArray());
});

app.get("/songs", async (req, res) => {
    res.send(await db.collection('Songs').find({}).toArray());
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
