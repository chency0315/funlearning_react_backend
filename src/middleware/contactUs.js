import Joi from "joi";
import { BAD_REQUEST } from "../utils/responseMessage.js";
import handleError from "../services/handleErrorResponse.js";


export const body = async (req,res,next)=>{
    const regex ='^([\\w\\.\\-]){1,64}\\@([\\w\\.\\-]){1,64}$';
    const rule = newRegExp(regex);
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().pattern(rule).required(),
        phone : Joi.string.required(),
        department: Joi.string().allow(''),
        subject: Joi.string().required(),
        contnet: Joi.string().required()
    });
    const {error}  = schema.validate(req.body);
    if (error){
        // errorLogger.error(__filename,error);
        return next(handleError(BAD_REQUEST,req.originalUrl,400));
    }
    next();
};
