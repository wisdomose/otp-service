import { model, Schema } from "mongoose";
import { Otp } from "../interfaces";

const OtpSchema = new Schema<Otp>({
  otp: {
    type: String,
    required: true,
  },
  owner_email: {
    type: String,
    required: true,
  },
});

const Model = model("OTP", OtpSchema);
export default Model;
