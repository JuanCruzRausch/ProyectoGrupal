const nodemailer = require('nodemailer');
require('dotenv').config();


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.gmail, // generated ethereal user
        pass: process.env.passwordGmail, // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false
    }
});

exports.sendEmail = async (email, subject, textHTML) => {
    try {
        let info = await transporter.sendMail({
            from: `${process.env.gmail}, <Mercado de enanos>`, // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            html: textHTML, // html body
        });
        return info
    } catch (error) {
        return error
    }
}