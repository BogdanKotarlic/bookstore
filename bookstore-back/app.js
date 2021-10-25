const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
require('dotenv').config();
const cors = require("cors");

const orderRoutes = require("./route/order");

const app = express();

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true}).then(() => console.log('DB Connect'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

app.use("/api", orderRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});