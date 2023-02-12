import { db } from '../connect.js';
import jwt from 'jsonwebtoken';

export const getFriends = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');

    const userId = userInfo.id;

    const q = `SELECT DISTINCT users.id AS userId, users.username, users.profilePic FROM relationships AS r1 JOIN relationships AS r2 ON r1.followedUserId = r2.followerUserId JOIN users ON r1.followedUserId = users.id WHERE r1.followerUserId = ? AND r2.followedUserId = ?`;

    db.query(q, [userId, userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
