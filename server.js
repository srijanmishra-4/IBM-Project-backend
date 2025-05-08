require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const connectDB = require('./utils/dbConfig')

const app = express();
const PORT = process.env.PORT || 8000

app.use(cors());
app.use(express.json());

connectDB()

const routesIndex = require('./routes/index')

app.use('/', routesIndex)

app.get('/ping', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
