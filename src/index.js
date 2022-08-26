'use strict'
require('dotenv').config();
const express= require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/bolgsite', {useNewUrlParser : true});

const dbUtil = mongoose.connection;
dbUtil.on('error', (error) => console.log(error));
dbUtil.once('open', () => console.log("connected to the db"));
app.use(cors());
app.use(express.json());
const router = require('./routes/apiRoute');

app.use('/api', router);

app.listen(9999, () => console.log("server started") );