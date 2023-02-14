import { db } from '../connect.js';
import jwt from 'jsonwebtoken';

//add message
export const addMessage = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');

    const q =
      'INSERT INTO messages (`conversationId`, `sender`, `text`) VALUES (?, ?, ?)';

    const values = [req.body.conversationId, req.body.sender, req.body.text];

    db.query(q, values, (err, result) => {
      if (err) return res.status(500).json(err);
      const createdMessage = {
        id: result.insertId,
        conversationId: req.body.conversationId,
        sender: req.body.sender,
        text: req.body.text,
      };
      return res.status(200).json(createdMessage);
    });
  });
};

//get messages

export const getMessages = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');

    const q = `SELECT * FROM messages WHERE conversationId = ?`;

    const values = [req.params.conversationId];

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
