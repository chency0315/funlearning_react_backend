import {EMAIL_SEND_FAIL} from '../utils/responseMessage.js';
import sendMail from '../utils/sendMail.js';
import handleError from '../services/handleErrorResponse.js'
const send = async(req,res,next)=>{
    // set access-control-allow-origin
    //res.setHeader('Access-Control-Allow-Origin', '*');
    try{
        await sendMail(req.body)
        res.json({message:'success'});
    }catch(error){
        // console.log(EMAIL_SEND_FAIL)
        // debug env variables
        // console.log(process.env.EMAIL);
        //errorlogger
        next(handleError(EMAIL_SEND_FAIL,req.originalUrl,400));
        res.status(500).json({error});
    }
};

export default{
    send
}

