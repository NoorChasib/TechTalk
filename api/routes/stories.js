import express from 'express';
import { format } from 'mysql';
import {
  getStories,
  createStory,
  getStory,
  updateStory,
  deleteStory,
} from '../controllers/stories.js';



const router = express.Router();

// const uploadFile = upload

// get all stories
router.get('/', getStories);

// create a new story

router.post('/', createStory);

// get a specific story
router.get('/:id', getStory);

// update a specific story
router.put('/:id', updateStory);

// delete a specific story
router.delete('/:id', deleteStory);

export default router;
