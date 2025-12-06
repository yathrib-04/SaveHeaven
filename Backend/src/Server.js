// src/Server.js
require('dotenv').config();
const express = require('express');
const router = express.Router();
const cors = require('cors');
const connectDB = require('./config/db');

const userRoutes = require('./Routers/userRoutes');


const app = express();
app.use(cors());
app.use(express.json());

// route mounting
app.use('/api/users', userRoutes);

// health
app.get('/', (req, res) => res.json({ status: 'ok', service: 'SaveHeaven Backend' }));

const PORT = process.env.PORT || 5000;
connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
module.exports = app;