const mongoose = require("mongoose");

const connectDB = async () => {
  
  await mongoose.connect(process.env.DATABASE_CONNECTION_AUTH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
  });

  console.log(`MongoDB connected now: `.white.bold +`${conn.connection.host}`.cyan.underline);
};



module.exports = connectDB;