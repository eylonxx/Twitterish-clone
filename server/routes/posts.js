import express from 'express';
import { createComment, getFeedPosts, getUserPosts, likePost } from '../controllers/posts.js';

import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// READ //

router.get('/', verifyToken, getFeedPosts);
router.get('/:userId', verifyToken, getUserPosts);

// UPDATE //
router.patch('/:id/like', verifyToken, likePost);
export default router;

// CREATE //
router.post('/:id/comment', verifyToken, createComment);
