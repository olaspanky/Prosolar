// /lib/mongodb.js
import { MongoClient } from 'mongodb';

let client;
let clientPromise;

if (!global._mongoClientPromise) {
    const client = new MongoClient("mongodb+srv://jbc:5z49DBx3UF6QrJeJ@cluster0.zsu16.mongodb.net/");
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
