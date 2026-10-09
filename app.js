require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/item.routes');
const projectRoutes = require('./routes/project.routes');
const inquiryRoutes = require('./routes/inquiry.routes');
const { seedInitialProjects } = require('./controllers/project.controller');

const app = express();

// Connect to MongoDB and seed baseline architectural data
connectDB().then(() => {
  seedInitialProjects();
});

// Core Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Uploads and Static Frontend UI
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use(express.static(path.join(__dirname, 'public')));

// Health Check Endpoint for monitoring / Passenger
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Admin verification route
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD || 'haseeb2026';

  if (password === adminPassword) {
    return res.status(200).json({
      success: true,
      message: 'Authenticated successfully',
      token: 'admin-session-' + Date.now(),
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid administrative password',
  });
});

// REST API Routes
app.use('/api/items', itemRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Fallback to index.html for SPA/frontend navigation
app.get('*', (req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).json({
      success: false,
      message: `API Route Not Found - ${req.originalUrl}`,
    });
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('[Application Error]:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Passenger & Standalone execution support
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  console.log(`Live site: http://localhost:${PORT}`);
  console.log(`Admin Portal: http://localhost:${PORT}/admin.html`);
});

module.exports = app;
