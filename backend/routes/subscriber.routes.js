import express from 'express';
import { addSubscriber } from '../controllers/subscriber.controllers.js';


const router = express.Router();

router.post('/post', addSubscriber)

export default router;