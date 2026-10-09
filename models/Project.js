const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Project category/typology is required'],
      enum: ['Residential', 'Commercial', 'Interior', 'Heritage', 'Landscape', 'Urban'],
      default: 'Residential',
    },
    client: {
      type: String,
      trim: true,
      default: 'Private Client',
    },
    location: {
      type: String,
      trim: true,
      default: 'Peshawar, KP',
    },
    year: {
      type: String,
      trim: true,
      default: () => new Date().getFullYear().toString(),
    },
    desc: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Primary image URL or path is required'],
    },
    gallery: {
      type: [String],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['Concept Stage', 'Schematic Design', 'BIM LOD 400', 'Under Construction', 'Completed'],
      default: 'Completed',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);

