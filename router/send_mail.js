
const express =require('express')
const router = express.Router()

// routes

router.get('/send_mail' ,(req ,res)=>{
    res.render('../views/send_mail')
})




var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jeantiero41@gmail.com',
    pass: 'jeanrodolphe2018'
  }
});

var mailOptions = {
  from: 'jeantiero41@gmail.com',
  to: 'cin71781@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>That was easy!</h1>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

module.exports =router;