const express = require('express');
const router = express.Router();
const {
  createInquiry,
  getInquiries,
  deleteInquiry,
} = require('../controllers/inquiry.controller');

router.route('/')
  .post(createInquiry)
  .get(getInquiries);

router.route('/:id')
  .delete(deleteInquiry);

module.exports = router;

