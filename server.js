const express = require('express');
const app = express();
const connectDB = require('./config/database');
const morgan = require('morgan');

// routes
const mainRoutes = require('./routes/main');

// dotenv config
require('dotenv').config({ path: './config/.env' });

connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('tiny'));

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});

app.use('/', mainRoutes);
