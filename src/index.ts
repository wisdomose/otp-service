import express, { Response, Request } from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.get("/", (req: Request, res: Response) => {
  return res.send("⚡⚡⚡Server is up and running⚡⚡⚡");
});
