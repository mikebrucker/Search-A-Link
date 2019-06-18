const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });

    console.log("MongoDB Connected!!!");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

// In this directory is a default.json file with the following

// {
//   "mongoURI": "mongodb+srv://mike:<MONGO_DB_PASSWORD>@CLUSTER_ID.mongodb.net/test?retryWrites=true&w=majority"
// }
