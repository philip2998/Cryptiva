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

const sendEmail = (name, email) => {
  const accessToken = OAuth2Client.getAccessToken();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.TOKEN,
      accessToken: accessToken,
    },
  });

  const mailOptions = {
    from: process.env.USER,
    to: email,
    subject: 'A Message from The GOAT',
    text: `<h3> Your message sent successfully ${name} </h3>`,
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

app.get('/api', (req, res) => {
  res.send('Hello from ExpressJS');
});

app.post('/api', (req, res) => {
  const { name, email } = req.body;
  sendEmail(name, email);
  res.json({ message: 'Email sent successfully' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server start at port ${PORT}`);
});
