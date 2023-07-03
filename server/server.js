const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;
const app = express();



//Import Routes
const casesRoute = require('./routes/crashCases')


//MIDDLEWARES
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());
app.use('/cases', casesRoute);


//Connecting to MongoDB 
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

