require('dotenv').config();

const express = require('express');
const authRoutes = require('./routes/auth.routes');
const errorHandler = require('./errors/errorHandler');
const auth = require('./middleware/auth');

const app = express();
app.use(express.json());

app.use(authRoutes);
app.use(errorHandler);

module.exports = app;