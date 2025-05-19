import express from "express";
import { router as notesRouter } from "./routes/notes.route.js";

const app = express();
const PORT = 3000;

app.use("/api/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`server is listen on port: ${PORT}`);
});
