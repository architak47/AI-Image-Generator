import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../db/models/post.models.js';
import e from 'express';

dotenv.config({
    path: './.env'
});

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_NAME,
    secret_key: process.env.CLOUDINARY_CLOUD_SECRET
})

router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200)
        .json({
            success: true,
            data: posts
        })
    } catch (error) {
        res.status(500)
        .json({
            success:false,
            message: error || 'fetching posts failed, please try again'
        });
    }
})

router.route('/').post(async (req,res) => {
    try {
        const {name, prompt, photo} = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url 
        });

        res.status(200)
        .json({
            success: true,
            data: newPost
        });
    } catch (error) {
        res.status(500)
        .json({
            success: false,
            message: error || 'Unable ot create a post, please try again'
        });
    }
});


export default router;