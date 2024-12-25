const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());


app.get('/', (req, res) => {
    res.json({ message: "Hello world!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
