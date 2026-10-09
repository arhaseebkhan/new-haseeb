const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Client name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Client email is required'],
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    typology: {
      type: String,
      enum: ['residential', 'commercial', 'interior', 'bim', 'heritage', 'other'],
      default: 'residential',
    },
    message: {
      type: String,
      required: [true, 'Scope and site requirements are required'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'scheduled', 'archived'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Inquiry', inquirySchema);

