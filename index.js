const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const indexRouter = require('./routes/index');
const lineRouter = require('./routes/line');

const app = express();
app.use(cors()); //อนุญาต url อื่นส่งข้อมูลมาที่เราได้

app.use(logger('dev'));
//สามบรรทัดนี้ ต้องอยู่บน express.json()
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter); //http://localhost:4000
app.use('/line', lineRouter); //http://localhost:4000/line/callback

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


module.exports = app;


