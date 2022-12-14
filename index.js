import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
// import 'dotenv/config'

import postRoutes from './routes/posts.js'

const app = express();



app.use(bodyParser.json({ limit: "30mb", extrended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extrended: true }))
app.use(cors());

app.use('/posts', postRoutes)

const CONNECTION_URL = "mongodb+srv://faraimajor:major305@cluster0.7tls1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);