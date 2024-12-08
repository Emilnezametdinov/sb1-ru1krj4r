import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import pool from '../db';

const router = express.Router();

// Get all inbox items
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM inbox_items ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inbox items' });
  }
});

// Create inbox item
router.post('/', async (req, res) => {
  const { title } = req.body;
  const id = uuidv4();
  // TODO: Get user_id from auth middleware
  const userId = 'temp-user-id';

  try {
    await pool.query(
      'INSERT INTO inbox_items (id, user_id, title) VALUES (?, ?, ?)',
      [id, userId, title]
    );
    res.status(201).json({ id, title });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create inbox item' });
  }
});

export default router;