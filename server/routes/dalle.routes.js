import express, { response } from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai'; 

dotenv.config({
    path: './.env'
});

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

if(openai) console.log('OpenAI API is connected');
else console.log('OpenAI API is not connected');

// const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
    res.send('Hello from dalle routes');
})

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        const image = aiResponse.data.data[0].b64_json;
        res.status(200).json({
            photo: image
        });
    } catch (error) {
        console.error(error);
        res.send(error?.response.data.error.message || 'Something went wrong')
        
    }
})

export default router; 