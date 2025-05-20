import { Note } from "../models/Note.model.js";

// #### Get All Notes
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: notes });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error!" });
  }
};

// Get Note by Id
const getNoteById = async (req, res) => {
  try {
    const singleNote = await Note.findById(req.params.id);
    if (!singleNote) {
      return res.status(404).json({ success: false, msg: "Note not found!" });
    }
    res.status(200).json({ success: true, data: singleNote });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error!" });
  }
};

// #### Create a Note
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await new Note({ title: title, content: content });
    const saveNewNote = await newNote.save();
    res.status(201).json({ success: true, data: saveNewNote });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error!" });
  }
};

// #### Update Note
const updateNote = async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedNote) {
      return res.status(404).json({ success: false, msg: "Note not found!" });
    }
    res.status(200).json({ success: true, data: updatedNote });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error!" });
  }
};

// #### Delete Note
const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ success: false, msg: "Note not found!" });
    }
    res.status(200).json({ success: true, data: deletedNote });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error!" });
  }
};

export { getAllNotes, createNote, updateNote, deleteNote, getNoteById };
