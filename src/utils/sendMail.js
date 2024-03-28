import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const host = process.env.MAIL_HOST;
const port = process.env.EMAIL_PORT;
const mail_to = process.env.MAIL_TO;
const mail_cc = process.env.MAIL_CC;

export default async function sendMail(reqBody){
  let transporter = nodemailer.createTransport({
    host: host,
    port: parseInt(port),
    secure:port==="465",
    auth:{
      user:email,
      pass:pass,
    }
  });
  let info = await transporter.sendMail({
    from: '"fun learning"<Jeffersonhungout@yahoo.com>',
    to: mail_to,
    cc: mail_cc,
    subject:"contact us",
    html: ` <p><strong>姓名：</strong>${reqBody.name}</p>
            <p><strong>聯絡電話：</strong>${reqBody.phone}</p>
            <p><strong>聯絡信箱：</strong>${reqBody.email}</p>
            <p><strong>任職公司/單位：</strong>${reqBody.apartment}</p>
            <p><strong>主題：</strong>${reqBody.subject}</p>
            <p><strong>內容：</strong>${reqBody.content}</p>
          `,
  });
}