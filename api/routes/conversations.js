import express from 'express';
import { getConversations, addConversation } from '../controllers/conversation.js'; 

const router = express.Router();


router.get('/', getConversations)
router.post('/', addConversation)


export default router;
