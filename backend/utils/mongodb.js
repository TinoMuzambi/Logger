const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) throw new Error("An error occured");

let cached = { conn: null, promise: null };

if (!cached) {
  cached = { conn: null, promise: null };
}

/**
 * Connect to the database.
 * @returns A mongoose object.
 */
const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

module.exports = dbConnect;
