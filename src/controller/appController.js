const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const user = process.env.EMAIL;
const password = process.env.EMAIL_PASS;
var smtpTransport = require('nodemailer-smtp-transport');

//send mail from testing account
const signup = async (req,res)=>{

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host:"smtp.ethereal.email",
        port:587,
        secure:false,
        auth:{
            user:testAccount.user,
            pass:testAccount.pass,
        },
    });

    let message = {
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      }

      transporter.sendMail(message).then((info)=>{
        return res.status(201).json({
            msg:"you should recieve an email",
            info:info.messageId,
            preview:nodemailer.getTestMessageUrl(info)
        })
      }).catch(error=>{
        return res.status(500).json({error})
      })

    // res.status(201).json("Signup Successfully...!");
}

//send mail to gmail account
const getbill = (req,res)=>{

    const {userEmail} = req.body;

    let config={
        service:"gmail",
        auth:{
            user:user,
            pass:password
        }
    }
    let transporter = nodemailer.createTransport(smtpTransport(config));
    let MailGenerator = new Mailgen({
        theme:"default",
        product:{
            name:"Mailgen",
            link:"https://mailgen.js"
        }
    })

    let response = {
        body:{
            name: "Jeff",
            intro:"Your bill has arrived!",
            table:{
                data:[
                    {
                    item:"Nodemailer Stack Book",
                    description:"A Backend application",
                    price:"$10.99",}
                ]
            }, 
            outro:"looking forward to do more business"
        }
    }
    let mail = MailGenerator.generate(response)

    let message = {
        from : userEmail,
        to : user,
        subject: "Place order",
        html: mail
    }
    transporter.sendMail(message).then(()=>{
        return res.status(201).json({
            msg:"you should recieve an email."
        })
    }).catch(error=>{
        return res.status(500).json({error})
    })
    // res.status(201).json("getBill Successfully...!");
}
module.exports={
    signup,
    getbill
}