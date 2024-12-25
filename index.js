const express = require('express');
const cors = require('cors');
require("dotenv").config();
const app = express();
const PORT = 8080;

app.use(cors());


app.get('/', (req, res) => {
    res.json({ message: process.env.MESSAGE });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
