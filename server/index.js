import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './db/connect.js';

import postRoutes from './routes/post.routes.js';
import aiRoutes from './routes/generate.routes.js';

dotenv.config({
    path: "./.env"
});

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/generate', aiRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from the server');
});

const startServer = async () => {
    try {
        connectDB();
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        });
    } catch (error) {
        console.log("Error starting server", error);
    }
};

startServer();
