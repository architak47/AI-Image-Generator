import express from 'express';
import * as dotenv from 'dotenv';
import Replicate from "replicate";

dotenv.config({
    path: './.env'
});

const router = express.Router();

const replicate = new Replicate({
    auth: process.env.API_KEY,
});

if (replicate) console.log('Replicate API is connected');
else console.log('Replicate API is not connected');

router.route('/').get((req, res) => {
    res.send('Your server is working fine, You can generate images');
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const input = {
            width: 640,
            height: 640,
            prompt: prompt,
            refine: "expert_ensemble_refiner",
            apply_watermark: false,
            num_inference_steps: 25
        };

        const aiResponse = await replicate.run("stability-ai/sdxl:7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc", { input });

        // Log the response to understand its structure
        console.log('AI Response:', aiResponse);

        // Assuming aiResponse is an array of URLs
        const imageUrl = aiResponse[0];
        if (!imageUrl) {
            throw new Error('Image generation failed');
        }

        res.status(200).json({
            photo: imageUrl
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error?.response?.data?.error?.message || 'Something went wrong' });
    }
});

export default router;
