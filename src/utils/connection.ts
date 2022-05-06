import mongoose from "mongoose";
export function connect() {
  mongoose.connect(process.env.MONGOOSE_URI as string, () => {
    console.log("mongoDB connected sucessfully");
  });
}
