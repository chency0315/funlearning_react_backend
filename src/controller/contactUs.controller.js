import {EMAIL_SEND_FAIL} from '../utils/responseMessage.js';
// import { Request,Response,NextFunction } from 'express';
import sendMail from '../utils/sendMail.js';

const send = async(req,res,next)=>{
    // set access-control-allow-origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    try{
        await sendMail(req.body)
        res.json({message:'success'});
    }catch(error){
        res.status(500).json({error});
        console.log(EMAIL_SEND_FAIL)
        //debug env variables
        console.log(process.env.EMAIL);
        // errorlogger
    }
};

export default{
    send
}

