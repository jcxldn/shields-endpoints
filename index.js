const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

require('./routes')(app);

app.get('/', (req, res) => {
  res.send('hello')
});

app.listen(process.env.PORT || 3000, () => console.log('server started'));