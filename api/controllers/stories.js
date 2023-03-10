import { db } from "../connect.js";
import jwt from "jsonwebtoken";


export const createStory = (req, res) => {
  const { userId, img } = req.body;
  

  const file = req.file


  // Verify the user's JWT
  const token = req.cookies.accessToken;
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(401).json({ error: 'Unauthorized' });

    //Insert the new story into the database
    const q = 'INSERT INTO stories (userId, img) VALUES (?, ?)';
    db.query(q, [userInfo.id, file.filename], (err, data) => {
      console.log(err)
      if (err) return res.status(500).json(err);
      return res.status(201).json({ message: 'Story created successfully', file });
    });
  });
};

export const getStories = (req, res) => {
  const q = 'SELECT * FROM stories';

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getStory = (req, res) => {
  const { id } = req.params;
  const q = 'SELECT * FROM stories WHERE id = ?';

  db.query(q, [id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

export const updateStory = (req, res) => {
  const { id } = req.params;
  const { img } = req.body;

  // Verify the user's JWT
  jwt.verify(req.token, process.env.JWT_SECRET, (err, userInfo) => {
    if (err) return res.status(401).json({ error: 'Unauthorized' });

    // Update the story in the database
    const q = 'UPDATE stories SET img = ? WHERE id = ?';
    db.query(q, [img, id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({ message: 'Story updated successfully' });
    });
  });
};

export const deleteStory = (req, res) => {
  const { id } = req.params;

  // Verify the user's JWT
  jwt.verify(req.token, process.env.JWT_SECRET, (err, userInfo) => {
    if (err) return res.status(401).json({ error: 'Unauthorized' });

    // Delete the story from the database
    const q = 'DELETE FROM stories WHERE id = ?';
    db.query(q, [id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({ message: 'Story deleted successfully' });
    });
  });
};