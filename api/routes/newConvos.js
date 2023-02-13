import express from 'express';
import { getNewConvos } from '../controllers/newConvo.js';

const router = express.Router();

router.get('/', getNewConvos);

export default router;
