import { MongoClient } from 'mongodb';
// await async 
// fullfilled
const URL   = 
"mongodb+srv://aryhauffe:KFyFHIPmo80IvV5m@cluster0.pqyf1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URL, { useUnifiedTopology: true });

export const db = client.db('MelodiaDB');
//const songCollection = await db.collection('Songs').find({}).toArray();
//console.log(songCollection);