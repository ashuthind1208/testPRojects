const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');



const postRoute = require('./Routes/posts');
app.use(bodyParser.json());
app.use(cors())
app.use('/api/posts',postRoute);

mongoose.connect(process.env.DB_CONNECTION,()=>{console.log('DB Connected')})
app.listen(3000,()=>{console.log('The server is live')})