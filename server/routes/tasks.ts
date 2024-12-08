import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import pool from '../db';

const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Create task
router.post('/', async (req, res) => {
  const { title, type, dueDate, comment, projectId } = req.body;
  const id = uuidv4();
  // TODO: Get user_id from auth middleware
  const userId = 'temp-user-id';

  try {
    await pool.query(
      'INSERT INTO tasks (id, user_id, title, type, due_date, comment, project_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id, userId, title, type, dueDate, comment, projectId]
    );
    res.status(201).json({ id, title, type });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

export default router;