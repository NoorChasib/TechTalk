import express from 'express';
import authRoutes from './routes/auth.js';
import commentRoutes from './routes/comments.js';
import likeRoutes from './routes/likes.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

const app = express();

app.listen(8800, () => {
  console.log('Server is running on port 8800');
});
