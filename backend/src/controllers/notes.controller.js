const getAllNotes = (req, res) => {
  res.status(200).json({ msg: "you got 20 notes." });
};

const createNote = (req, res) => {
  res.status(201).json({ success: true, msg: "note created successfully." });
};

const updateNote = (req, res) => {
  res.status(200).json({ success: true, msg: "note updated successfully." });
};

const deleteNote = (req, res) => {
  res.status(200).json({ success: true, msg: "note deleted successfully." });
};

export { getAllNotes, createNote, updateNote, deleteNote };
