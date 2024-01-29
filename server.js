// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Add path module to handle file paths
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Store brand data
let brands = [];

// Routes
app.get('/brands', (req, res) => {
    res.json(brands);
});

app.post('/brands', (req, res) => {
    const newBrand = req.body;
    brands.push(newBrand);
    res.status(201).send('Brand added successfully');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
