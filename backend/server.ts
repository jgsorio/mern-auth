import express, { Request, Response } from "express";
import { ENV } from "./utils/env";
import { connectToDatabase } from "./utils/db";
import authRoute from "./routes/auth.route";

const app = express();
const PORT = Number(ENV.PORT);

app.get("/health", (request: Request, response: Response): any => {
  try {
    return response.status(200).json({ success: true, message: "Server is running" });
  } catch (error) {
    console.error("Error checking server health", error);
    return response.status(500).json({ success: false, message: "Server is not running" });
  }
});

app.use(express.json());
app.use("/api/v1/auth", authRoute);

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
  connectToDatabase();
});
