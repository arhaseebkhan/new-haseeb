const mongoose = require('mongoose');

/**
 * Connect to MongoDB using Mongoose.
 * Automatically falls back to an in-memory dummy MongoDB instance
 * if no MONGODB_URI is provided or if the connection fails.
 */
const connectDB = async () => {
  let uri = process.env.MONGODB_URI;

  if (process.env.USE_DUMMY_DB === 'true' || !uri) {
    try {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongod = await MongoMemoryServer.create();
      uri = mongod.getUri();
      console.log(`[MongoDB] Started in-memory dummy database at: ${uri}`);
    } catch (err) {
      console.warn(`[MongoDB] Could not start in-memory Mongo server: ${err.message}`);
    }
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`[MongoDB] Connected successfully to: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[MongoDB] Connection to ${uri} failed: ${error.message}`);
    console.log('[MongoDB] Falling back to in-memory dummy database...');
    try {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongod = await MongoMemoryServer.create();
      const fallbackUri = mongod.getUri();
      const conn = await mongoose.connect(fallbackUri);
      console.log(`[MongoDB] Connected successfully to fallback in-memory dummy DB: ${conn.connection.host}`);
    } catch (fallbackErr) {
      console.error(`[MongoDB] In-memory dummy DB fallback error: ${fallbackErr.message}`);
      process.exit(1);
    }
  }
};

module.exports = connectDB;
