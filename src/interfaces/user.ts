import { Document } from "mongoose";
interface BaseUser {
  email: string;
}

interface User extends Document, BaseUser {}

export type { User };
