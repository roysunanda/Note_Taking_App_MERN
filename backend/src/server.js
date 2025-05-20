import express from "express";
import dotenv from "dotenv";

import { router as notesRouter } from "./routes/notes.route.js";
import { connectDB } from "./config/db.js";

dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/notes", notesRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(`Failed to connect to db. \n ${error}`);
    process.exit(1);
  }
};

startServer();
