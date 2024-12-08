import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import inboxRoutes from './routes/inbox';
import tasksRoutes from './routes/tasks';
import projectsRoutes from './routes/projects';
import notesRoutes from './routes/notes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/inbox', inboxRoutes);
app.use('/api/tasks', tasksRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/notes', notesRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});