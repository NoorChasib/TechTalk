import { db } from '../connect.js';
import jwt from 'jsonwebtoken';

//new conv

export const newConversation = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');

    const q = 'INSERT INTO conversations (`senderId`, `receiverId`) VALUES (?)';

    const values = [req.body.senderId, req.body.receiverId];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json('Conversation has been created');
    });
  });
};

//get conv of a user

export const getOneUserConversation = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');

    const q =
      'SELECT * FROM conversations WHERE `senderId` = ? OR `receiverId` = ? ';

    const values = [req.params.userId, req.params.userId];

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

// get conv includes two userId

export const getTwoUserConversation = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');

    const q =
      'SELECT * FROM conversations WHERE `senderId` = ? AND `receiverId` = ? OR `senderId` = ? AND `receiverId` = ?';

    const values = [
      req.params.firstUserId,
      req.params.secondUserId,
      req.params.secondUserId,
      req.params.firstUserId,
    ];

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
