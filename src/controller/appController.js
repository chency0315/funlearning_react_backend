// const nodemailer = require('nodemailer');
// const Mailgen = require('mailgen');
// const user = process.env.EMAIL;
// const password = process.env.EMAIL_PASS;
// const port = process.env.MAIL_HOST
// const host = process.env.EMAIL_PORT

// // var smtpTransport = require('nodemailer-smtp-transport');

// //send mail to gmail account
// const getbill = async(req,res)=>{

//     const {userEmail} = req.body;

//     let config={
//         host: host,
//         port: parseInt(port),
//         secure: host ==="465",
//         service:"iCloud",
//         auth:{
//             user:user,
//             pass:password,
//         },
//     }
//     let transporter = nodemailer.createTransport(config);
//     let MailGenerator = new Mailgen({
//         theme:"default",
//         product:{
//             name:"Mailgen",
//             link:"https://mailgen.js"
//         }
//     })

//     let response = {
//         body:{
//             name: "Jeff",
//             intro:"Your bill has arrived!",
//             table:{
//                 data:[
//                     {
//                     item:"Nodemailer Stack Book",
//                     description:"A Backend application",
//                     price:"$10.99",}
//                 ]
//             }, 
//             outro:"looking forward to do more business"
//         }
//     }
//     let mail = MailGenerator.generate(response)

//     let message = {
//         from : '"Jeffrey"<jeffrey60310@icloud.com>',
//         to : userEmail,
//         subject: "Place order",
//         html: mail
//     }
//     await transporter.sendMail(message).then(()=>{
//         return res.status(201).json({
//             msg:"you should recieve an email."
//         })
//     }).catch(error=>{
//         return res.status(500).json({error})
//     })
// }
// module.exports={
//     // signup,
//     getbill
// }