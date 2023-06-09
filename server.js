const express = require('express');
const cors = require('cors');
const router = express.Router();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3000;

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(PORT, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify(error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const subject = req.body.subject;
  const mail = {
    from: name,
    to: '********@gmail.com',
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Subject: ${subject}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, error => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});
