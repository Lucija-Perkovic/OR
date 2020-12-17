const express = require('express');
const app = express();
const path = require('path');

const datatableRouter = require('./routes/datatable.routes');
const add_parkRouter = require('./routes/add_park.routes');
const update_parkRouter = require('./routes/update_park.routes');
const delete_parkRouter = require('./routes/delete_park.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.use('/', datatableRouter);
app.use('/add_park', add_parkRouter);
app.use('/update_park', update_parkRouter);
app.use('/delete_park', delete_parkRouter);

app.listen(3000);