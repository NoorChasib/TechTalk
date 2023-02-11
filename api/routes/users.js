import express from 'express';
import { getUser , updateUser, searchUser} from '../controllers/user.js';

const router = express.Router();

router.get('/find/:userId', getUser)
router.put('/', updateUser)
router.get('/', searchUser)

export default router;

