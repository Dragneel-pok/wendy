const express = require('express');
const app = express();
const port = 6969;
app.get('/', (req, res) => res.send('Am alive!'));

app.listen(port, () => console.log(`Harmony streaming to http://localhost:${port}`));