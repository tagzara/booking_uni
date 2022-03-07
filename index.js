const express = require('express');

const { PORT } = require('./config');
const databaseConfig = require('./config/database.js');
const expressConfig = require('./config/express.js');

start();

async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);

    app.get('/', (req, res) => {
        res.send('Let\'s start!');
    });

    app.listen(PORT, () => console.log(`Application is running at http://localhost:${PORT}`));
}