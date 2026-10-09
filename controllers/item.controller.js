const Item = require('../models/Item');

/**
 * @desc    Get all items
 * @route   GET /api/items
 */
const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching items',
      error: error.message,
    });
  }
};

/**
 * @desc    Create a new item
 * @route   POST /api/items
 */
const createItem = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const newItem = await Item.create({ title, description, status });

    return res.status(201).json({
      success: true,
      data: newItem,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: messages,
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Server error while creating item',
      error: error.message,
    });
  }
};

/**
 * @desc    Get single item by ID
 * @route   GET /api/items/:id
 */
const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid item ID format',
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Server error while fetching item',
      error: error.message,
    });
  }
};

/**
 * @desc    Update an item
 * @route   PUT /api/items/:id
 */
const updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: messages,
      });
    }

    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid item ID format',
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Server error while updating item',
      error: error.message,
    });
  }
};

/**
 * @desc    Delete an item
 * @route   DELETE /api/items/:id
 */
const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Item deleted successfully',
      data: {},
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid item ID format',
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Server error while deleting item',
      error: error.message,
    });
  }
};

module.exports = {
  getItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
};

