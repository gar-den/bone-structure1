import mongoose, { ConnectOptions } from "mongoose";

const url = "mongodb://localhost:27017/???"; // needed to be modified

const connect = (): void => {
    mongoose.connect(url)
      .catch((err) => {
        console.log(err);
      });
  };
  
  mongoose.connection.on("error", (err): void => {
    console.log("mongoDB connection error", err);
  });
  
  export { connect };