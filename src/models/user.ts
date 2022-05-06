import { model, Schema } from "mongoose";
import { User } from "../interfaces";

const UserSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Model = model("User", UserSchema);
export default Model;
