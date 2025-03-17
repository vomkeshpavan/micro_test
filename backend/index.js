const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!', data: 'Some sample data' });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
