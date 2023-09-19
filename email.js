var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'eduardadaminelli314@gmail.com',
    pass: 'zmzv emur blam pola'
  }
});

var mailOptions = {
  from: 'eduardadaminelli314@gmail.com',
  to: 'eduardadaminelli314@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});