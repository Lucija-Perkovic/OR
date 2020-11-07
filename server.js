const express = require('express');
const app = express();
const path = require('path');

const datatableRouter = require('./routes/datatable.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.use('/', datatableRouter);

app.listen(3000);