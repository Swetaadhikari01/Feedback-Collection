// server/routes/feedback.js
const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.status(201).json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save feedback' });
  }
});

router.get('/', async (req, res) => {
  const { search = '', page = 1, limit = 10, sort = 'createdAt' } = req.query;
  try {
    const query = search
      ? {
        $or: [
          { name: new RegExp(search, 'i') },
          { email: new RegExp(search, 'i') },
          { message: new RegExp(search, 'i') },
        ],
      }
      : {};
    const feedbacks = await Feedback.find(query)
      .sort({ [sort]: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(feedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get feedback' });
  }
});

module.exports = router;
