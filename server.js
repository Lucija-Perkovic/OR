const express = require('express');
const app = express();
const path = require('path');

const datatableRouter = require('./routes/datatable.routes');
const add_parkRouter = require('./routes/add_park.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.use('/', datatableRouter);
app.use('/add_park', add_parkRouter);

app.listen(3000);