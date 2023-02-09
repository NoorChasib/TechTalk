import { db } from '../connect.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import axios from 'axios';

export const register = (req, res) => {
  const q = 'SELECT * FROM users WHERE username = ?';
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json('This user already exists.');
    // CREATE A NEW USER
    //Hsh the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      'INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)';

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json('User has been created.');
    });
  });
};

export const login = (req, res) => {
  const q = 'SELECT * FROM users WHERE username = ?';

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json('User not found!');

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json('Wrong password or username!');

    const token = jwt.sign({ id: data[0].id }, 'secretkey');

    const { password, ...others } = data[0];

    res
      .cookie('accessToken', token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie('accessToken', {
      secure: true,
      sameSite: 'none',
    })
    .status(200)
    .json('User has been logged out.');
};

const getCodeFromUrl = (req) => {
  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  return req.body.code;
};


const getUserInfo = async (accessToken) => {
  console.log("accesstoken", accessToken)
  try {
    const response = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    return null;
  }
};


export const getToken = async (req, res) => {
  const code = getCodeFromUrl(req); // a helper function to extract the code from the URL
  console.log(code);
  const result = await axios.post(
    'https://github.com/login/oauth/access_token',
    {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: code,
    },
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );

  console.log(result.data);
  res.json(result.data.access_token)


};






