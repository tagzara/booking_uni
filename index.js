const express = require('express');

const { PORT } = require('./config');

const app = express();

app.get('/', (req, res) => {
    res.send('Let\'s start!');
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));