export default (message, originalUrl, statusCode=500)=>{
    const error = new error(message);
    error.statusCode=statusCode;
    error.originalUrl=originalUrl;
    return error;
};