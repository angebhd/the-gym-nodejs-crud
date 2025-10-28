const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;

if(!DATABASE_URL) throw new Error("DATABASE_URL is not defined in environment variables");

mongoose.connect(DATABASE_URL)
const db = mongoose.connection;

db.on('error', (error: Error) => console.error("Database connection error:", error));
db.once('open', () => console.log("Connected to the database successfully"));