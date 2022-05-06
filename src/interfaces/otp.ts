import { Document } from "mongoose";
interface BaseOtp {
  otp: string;
  owner_email: string;
}

interface Otp extends Document, BaseOtp {}

export type { Otp };
