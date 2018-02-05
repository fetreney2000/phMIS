const express = require('express');
const mongoose = require('mongoose');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const lodash = require('lodash');

const app = express();

const port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('./public'));

require('./routers/index')(app);

app.listen(port, () => {
    console.log(`The server has start listening on port ${port}...`);
});