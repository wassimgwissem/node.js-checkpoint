var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'benyoussefzied73@gmail.com',
    pass: 'deleted portal pass after testing it'
  }
});

var mailOptions = {
  from: 'benyoussefzied73@gmail.com',
  to: 'wassimgouisssem@gmail.com',
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