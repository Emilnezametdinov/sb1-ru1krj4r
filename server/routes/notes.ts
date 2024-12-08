import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import pool from '../db';

const router = express.Router();

// Get all notes
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM notes ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
});

// Create note
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const id = uuidv4();
  // TODO: Get user_id from auth middleware
  const userId = 'temp-user-id';

  try {
    await pool.query(
      'INSERT INTO notes (id, user_id, title, content) VALUES (?, ?, ?, ?)',
      [id, userId, title, content]
    );
    res.status(201).json({ id, title });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create note' });
  }
});

export default router;