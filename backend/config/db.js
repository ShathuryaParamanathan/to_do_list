const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,

    })
    .then((con) => {
      console.log(`MongoDB connected: ${con.connection.host}`);
    })
    .catch((err) => {
      console.error(`MongoDB connection error: ${err.message}`);
      process.exit(1); // Exit process with failure
    });
};

module.exports = connectDatabase;
