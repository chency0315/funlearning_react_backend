// import * as middleware from '../middleware/contactUs';
import express from 'express';
import controller from '../controller/contactUs.controller.js';
/**
 * 文章清單
 */
const router = express.Router()
router.route('/')
        .post(controller.send); //, middleware.body
router.get("/",(req,res)=>{
        res.send("This is api/contactus.")
})
export default router;