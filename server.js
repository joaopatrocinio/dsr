const express = require('express');
app = express();
app.use(express.static('dist'))
const port = process.env.PORT || 80;
app.listen(port);