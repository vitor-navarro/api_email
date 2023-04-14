const express = require("express")
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../templates')

const nodemailer = require('nodemailer')
const email_template_simple = require(`${basePath}/simple_template.js`);
const SMTP_CONFIG = require('../config/smtp')

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth:{
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls:{
        rejectUnauthorized: false,
    },
});

async function sendMail(body){

    const company = process.env.SITE_COMPANY_NAME

    const to_emails = (process.env.GMAIL_TO_EMAIL_LIST)

    const mailSend = await transporter.sendMail({
        text: email_template_simple(body,company),
        subject: `Orçamento de ${body.name}`,
        from: process.env.GMAIL_FROM_EMAIL,
        to: to_emails,
    });

    return mailSend;
}

router.post('/emailSend', (req, res) => {
    console.log(req.body)
    
    sendMail(req.body)
    .then(function(response) {
        console.log("SUCCESS!",response)
        return res.json({status: (200), message: "O email foi enviado com sucesso!" });
    })
    .catch(function(error) {
        console.log('FAILED...', error);
        return res.json({status: (500), message: "Ocorreu um erro ao enviar o email." });
    });

    });


module.exports = router