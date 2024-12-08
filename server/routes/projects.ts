import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import pool from '../db';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Create project
router.post('/', async (req, res) => {
  const { title, area, firstStep, completionCriteria } = req.body;
  const id = uuidv4();
  // TODO: Get user_id from auth middleware
  const userId = 'temp-user-id';

  try {
    await pool.query(
      'INSERT INTO projects (id, user_id, title, area, first_step, completion_criteria) VALUES (?, ?, ?, ?, ?, ?)',
      [id, userId, title, area, firstStep, completionCriteria]
    );
    res.status(201).json({ id, title, area });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
});

export default router;