import mongodb from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const MongoClient = mongodb.MongoClient;
const connectionURL = process.env.MONGODB_URL;
console.log(connectionURL);

const client = new MongoClient(connectionURL)

let conn;
try{
    conn = await client.connect();
} catch (error) { 
    console.log('error: ', error);
}

let db = conn.db('task-manager');

// console.log('db: ', db);
if (db) {
    console.log('db connected');
}











// const client = new MongoClient(connectionURL
//     // , { useNewUrlParser: true, useUnifiedTopology: true }
//     );

// let db;
// try {
//     db = client.connect()
//     let dbo = db.db('task-manager');
//     dbo.createCollection('tasks', (err, res) => {
//         if (err) throw err;
//         console.log('Collection created!');
//         db.close();
//     });
//     console.log('db: ', db);
// } catch (error) {
//     console.log('error: ', error);
// }

export default db;