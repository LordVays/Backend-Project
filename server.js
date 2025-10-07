const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require("dotenv").config()

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {

    res.json({ message: "API work corrected" });

});


mongoose.connect("mongodb://localhost:27017/backend").then(() => {

    console.log("Connect in DB");

}).catch((error) => {

    console.error("Err connected in DB: ", error);

});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server was start on port: ${PORT}` );

});