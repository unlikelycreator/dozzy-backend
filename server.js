const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const noteRoute = require('./routes/noteRoute')
const app = express();
const PORT = process.env.PORT | 5000;


app.use(express.json())
app.use(cors());


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Ready to roll your Data"))
.catch((err) => console.log(err))

app.use(noteRoute);
app.listen(PORT);