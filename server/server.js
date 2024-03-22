// import bodyParser from 'body-parser'

const express = require('express')
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const app = express()

app.use(bodyParser.json())
app.get("/api", (req, res) => {
    res.json({"userData": ['danil', '+79967405143', 'trohin.danil2013@yandex.ru']})

})


const sendMail = (to, subject, text) => {

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'vegaalphaweb24@gmail.com',
            pass: 'sjlb vufn moyd xlna'
        }
    });


    const mailOptions = {
        from: 'vegaalphaweb24@gmail.com',
        to: to,

        subject: subject,
        text: text
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};



app.post("/api/form", (req, res) => {
res.json({"message": 'form submited'})

    let formSub = req.body
    // console.log(req.body)
    const email = req.body[0]
    const phone = req.body[1]
    const name = req.body[2]
    // console.log(email,phone,name)

    sendMail('futurecrew@mts.ru', 'VegaAlpha.ru | Форма обратной связи', `email: ${email}, Телефон: ${phone},  ФИО: ${name}`);
})

app.listen(3001, () => {console.log("server start port 3001")})
