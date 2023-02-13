import express from 'express';
import {
  newConversation,
  getOneUserConversation,
  getTwoUserConversation,
} from '../controllers/conversation.js';

const router = express.Router();

router.post('/', newConversation);
router.get('/:userId', getOneUserConversation);
router.get('/find/:firstUserId/:secondUserId', getTwoUserConversation);

export default router;
