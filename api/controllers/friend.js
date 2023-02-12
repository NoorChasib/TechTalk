import { db } from '../connect.js';
import jwt from 'jsonwebtoken';

export const getFriends = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');

    const userId = userInfo.id;

    const q = `SELECT followedUserId FROM relationships WHERE followerUserId = ? INTERSECT SELECT followerUserId FROM relationships WHERE followedUserId = ?`;

    db.query(q, [userId, userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
