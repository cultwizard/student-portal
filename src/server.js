const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Simple API endpoint
app.get('/api/status', (req, res) => {
  res.json({ status: 'online', message: 'Student Portal is running smoothly!' });
});

// Start the server only if this file is run directly (not in tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// Export app for testing purposes
module.exports = app;
