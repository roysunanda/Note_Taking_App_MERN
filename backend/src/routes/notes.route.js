import express from "express";
import {
  deleteNote,
  getAllNotes,
  createNote,
  updateNote,
  getNoteById,
} from "../controllers/notes.controller.js";

const router = express.Router();

router.route("/").get(getAllNotes).post(createNote);
router.route("/:id").patch(updateNote).delete(deleteNote).get(getNoteById);

export { router };
