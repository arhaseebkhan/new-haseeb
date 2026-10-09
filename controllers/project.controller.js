const Project = require('../models/Project');

/**
 * Seed initial architectural portfolio data if the database is empty
 */
const seedInitialProjects = async () => {
  try {
    const count = await Project.countDocuments();
    if (count === 0) {
      const initialProjects = [
        {
          title: "The Stone Cantilever Residence",
          category: "Residential",
          client: "Private Estate",
          location: "Northern Mountain Terraces",
          year: "2025",
          status: "Under Construction",
          featured: true,
          desc: "A contemporary multi-level hillside home designed with zero-carbon footprint intentions, cascading terrace gardens, and passive solar heating.",
          image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
          gallery: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          title: "Vanguard Corporate Tower",
          category: "Commercial",
          client: "Apex Development",
          location: "Central Business District",
          year: "2024",
          status: "BIM LOD 400",
          featured: true,
          desc: "14-floor high performance office building equipped with dynamic parametric louver shading, integrated green sky courts and MEP coordination.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
          gallery: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          title: "Serenade Penthouse Interior",
          category: "Interior",
          client: "Private Client",
          location: "Riverside Marina",
          year: "2024",
          status: "Completed",
          featured: false,
          desc: "Curated luxury interior pairing travertine marble finishes, recessed linear illumination, and handcrafted fluted woodwork.",
          image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
          gallery: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          title: "Colonial Arcade Heritage Revival",
          category: "Heritage",
          client: "Urban Conservation Trust",
          location: "Historic Walled Quarter",
          year: "2023",
          status: "Completed",
          featured: false,
          desc: "Preservation and adaptive reuse of 19th-century masonry arches, seamlessly inserting hidden HVAC and steel structural ties.",
          image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
          gallery: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
          ]
        }
      ];
      await Project.insertMany(initialProjects);
      console.log('[Database] Seeded initial architectural portfolio projects');
    }
  } catch (err) {
    console.error('[Database Seeding Error]:', err.message);
  }
};

/**
 * @desc    Get all projects (with optional category filter)
 * @route   GET /api/projects
 */
const getProjects = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category && req.query.category !== 'all') {
      filter.category = new RegExp(`^${req.query.category}$`, 'i');
    }

    const projects = await Project.find(filter).sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error retrieving projects',
      error: error.message,
    });
  }
};

/**
 * @desc    Get single project by ID
 * @route   GET /api/projects/:id
 */
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      });
    }
    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error retrieving project',
      error: error.message,
    });
  }
};

/**
 * @desc    Create a new architectural project (via Admin Portal)
 * @route   POST /api/projects
 */
const createProject = async (req, res) => {
  try {
    const { title, category, client, location, year, status, desc, featured } = req.body;
    
    // Support file upload or direct image URL
    let image = req.body.image;
    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    }

    if (!image) {
      return res.status(400).json({
        success: false,
        message: 'Project image is required (upload file or specify URL)',
      });
    }

    const newProject = await Project.create({
      title,
      category,
      client,
      location,
      year: year || new Date().getFullYear().toString(),
      status: status || 'Completed',
      desc,
      image,
      featured: featured === 'true' || featured === true,
      gallery: [image],
    });

    return res.status(201).json({
      success: true,
      message: 'Project created and stored in database successfully',
      data: newProject,
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
      message: 'Server error while saving project',
      error: error.message,
    });
  }
};

/**
 * @desc    Update project
 * @route   PUT /api/projects/:id
 */
const updateProject = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updated = await Project.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error while updating project',
      error: error.message,
    });
  }
};

/**
 * @desc    Delete project from database
 * @route   DELETE /api/projects/:id
 */
const deleteProject = async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Project deleted successfully from database',
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error while deleting project',
      error: error.message,
    });
  }
};

module.exports = {
  seedInitialProjects,
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};

