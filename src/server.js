const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React client build directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// API endpoint (to keep our automated tests passing)
app.get('/api/status', (req, res) => {
  res.json({ status: 'online', message: 'Student Portal API is operational.' });
});

// For any other routes, let React handle the routing by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start the server only if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Express server is running on http://localhost:${PORT}`);
    console.log(`Serving React SPA from ../client/dist`);
  });
}

// Export app for testing purposes
module.exports = app;
