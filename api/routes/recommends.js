import express from 'express';
import {  getRecommends } from '../controllers/recommend.js'; 

const router = express.Router();

router.get('/', getRecommends)

export default router;
