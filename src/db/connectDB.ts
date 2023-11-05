import mongoose from "mongoose";

export const connectDB = async (url: string) => {
  mongoose.Promise = Promise;
  mongoose.connect(url);
  mongoose.connection.on("error", (error: Error) => console.log(error));
};
