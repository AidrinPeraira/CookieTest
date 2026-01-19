import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(
  cors({
    origin: true, // ← allow ANY origin dynamically
    credentials: true, // ← allow cookies / auth headers
  }),
);

app.get("/get-token", (req: Request, res: Response) => {
  console.log("Hits");
  res.status(200).json({ token: "this is my new token" });
});

app.post("/something", (req: Request, res: Response) => {
  console.log("Cookie", req.cookies);
  res.status(200).json({ message: "some request says hi" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Listening on port 5000");
});
