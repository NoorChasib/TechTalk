import { db } from '../connect.js';
import jwt from 'jsonwebtoken';

export const getRecommends = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');

    const userId = userInfo.id;

    const q = `SELECT users.id AS userId, users.username, users.profilePic FROM users WHERE users.id NOT IN (SELECT followedUserId FROM relationships WHERE followerUserId = ?) AND users.id != ?`;

    db.query(q, [userId, userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
