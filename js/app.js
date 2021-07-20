/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('../routes/user.route');
const recentRouter = require('../routes/recent.route');
const favouriteRouter = require('../routes/favourite.route');
const playlistRouter = require('../routes/playlist.route');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors({
  origin: '*',
}));

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true });
mongoose.set('autoCreate', true);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connection to db established'));

app.use(express.json());
app.use(express.urlencoded({
  type: 'applicaton/x-www-form-urlencoded',
  extended: true,
}));

app.use('/', userRouter);
app.use('/', recentRouter);
app.use('/', favouriteRouter);
app.use('/', playlistRouter);

app.use('*', (req, res) => {
  res.status(404);
  res.send('Path cannot found');
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running on ${HOSTNAME}:${PORT}`);
});









