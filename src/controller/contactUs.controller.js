// import {EMAIL_SEND_FAIL} from '../utils/responseMessage.js';
// import { Request,Response,NextFunction } from 'express';
import sendMail from '../utils/sendMail.js';

const send = async(req,res,next)=>{
    try{
        await sendMail(req.body)
        res.json({message:'success'});
    }catch(error){
        res.json({message:"fail"});
        // errorlogger
    }
};

export default{
    send,
}

