import express from "express";
import {getposts, addPosts} from "../controllers/posts.js"

const router = express.Router();

router.get('/', getposts);
router.post('/', addPosts);

export default router;