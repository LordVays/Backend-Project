const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/router.js');

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.get('/api', (req, res) => {

    res.status(200).json("Server is work");

});


mongoose.connect('mongodb://127.0.0.1/test').then(() => {

    console.log("Connect in DB");

}).catch((error) => {

    console.error("Err connected in DB: ", error);

});



app.listen(PORT, () => {

    console.log(`Server was start on port: ${PORT}` );

});