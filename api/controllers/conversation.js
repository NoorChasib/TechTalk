import { db } from '../connect.js';
import jwt from 'jsonwebtoken';
import moment from 'moment';

export const getConversations = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');

    const userId = userInfo.id;
    const receiverId = req.query.receiverId;

    const q = `SELECT * FROM messages WHERE senderId = ? AND receiverId = ? OR senderId = ? AND receiverId = ? ORDER BY createdAt ASC`;

    db.query(
      q,
      [userId, 70, 70, userId],
      (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      }
    );
  });
};

export const addConversation = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');

    const q =
      'INSERT INTO messages( `text`, `createdAt`, `senderId`, `receiverId`) VALUES (?) ';

    const values = [
      req.body.text,
      moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      userInfo.id,
      req.body.receiverId,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json('Conversation has been created');
    });
  });
};
