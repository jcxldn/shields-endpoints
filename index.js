const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('static'));

require('./routes')(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server started on port ${port}`));