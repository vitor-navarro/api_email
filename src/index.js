
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const email_template_1 = require('./templates/templates');

const cors = require('cors')
const corsOptions = {
    origin: process.env.ENABLED_CORS
}

const SMTP_CONFIG = require('./config/smtp')
const app = express();
const port = process.env.PORT;

app.use(cors(corsOptions))
app.use(bodyParser.json())

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
        text: email_template_1(body,company),
        subject: `Orçamento de ${body.name}`,
        from: process.env.GMAIL_FROM_EMAIL,
        to: to_emails,
    });

    return mailSend;
}

app.post('/emailSend', (req, res) => {

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

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
    });