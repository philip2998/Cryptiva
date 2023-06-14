const express = require('express');
const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const OAuth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET
);
OAuth2Client.setCredentials({ refresh_token: process.env.TOKEN });

const sendEmail = (email, subject, message) => {
  const accessToken = OAuth2Client.getAccessToken();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.TOKEN,
      accessToken: accessToken,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject,
    text: message,
  };

  transport.sendMail(mailOptions, (err, result) => {
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log('Success: ', result);
    }
    transport.close();
  });
};

app.get('/api', (req, res) => res.send('Hello from Server'));

app.post('/api', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const { email, subject, message } = req.body;

  if (token === process.env.TOKEN) {
    sendEmail(email, subject, message);
    res.json({ message: 'Email sent successfully' });
  } else {
    res.status(401).json({ message: 'Invalid Token' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server start at port ${PORT}`);
});
