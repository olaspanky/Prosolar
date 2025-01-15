// // /lib/mongodb.js
// import { MongoClient } from 'mongodb';

// let client;
// let clientPromise;

// if (!global._mongoClientPromise) {
//     const client = new MongoClient("mongodb+srv://jbc:5z49DBx3UF6QrJeJ@cluster0.zsu16.mongodb.net/");
//   global._mongoClientPromise = client.connect();
// }

// clientPromise = global._mongoClientPromise;

// export default clientPromise;


import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the connection across hot reloads.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;