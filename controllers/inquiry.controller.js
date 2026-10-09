const Inquiry = require('../models/Inquiry');

/**
 * @desc    Submit a client consultation booking / inquiry
 * @route   POST /api/inquiries
 */
const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, typology, message } = req.body;
    const inquiry = await Inquiry.create({ name, email, phone, typology, message });
    return res.status(201).json({
      success: true,
      message: 'Consultation inquiry received and saved to database.',
      data: inquiry,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message || 'Error creating inquiry',
    });
  }
};

/**
 * @desc    Get all inquiries (for Admin portal)
 * @route   GET /api/inquiries
 */
const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error fetching inquiries',
    });
  }
};

/**
 * @desc    Delete inquiry
 * @route   DELETE /api/inquiries/:id
 */
const deleteInquiry = async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: true, message: 'Inquiry removed' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error deleting inquiry' });
  }
};

module.exports = {
  createInquiry,
  getInquiries,
  deleteInquiry,
};

