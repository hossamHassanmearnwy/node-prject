const mongoose = require("mongoose");
//import { env } from 'process';
// mongoose.connect(process.env.DB_URL);
const db_uri = process.env.D_URL;
const dbConnection = () => {
  mongoose
    .connect(db_uri)
    .then((conn) => {
      console.log(`Successfully Connection on: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(`Database Error: ${err}`);
    });
};

module.exports = dbConnection;
