const db = require('../database');
const Project = require('../database/schema.js');
const nodemailer = require('nodemailer');
const gmail = require('../gmail.js');

var controller = {
  get: (req, res) => {
    Project.find()
      .then(data => res.status(200).send(data))
      .catch(err => console.error(err));
  },
  post: (req, res) => {
    var data = req.body;
    var smtpTransport = nodemailer.createTransport({
      service: 'Gmail',
      port: 465,
      auth: {
        user: `${gmail.email}`,
        pass: `${gmail.password}`
      }
    });
    var mailOptions = {
      from: data.email,
      to: `${gmail.email}`,
      subject: `${data.subject}`,
      html: `<p>${data.name}</p>
              <p>${data.email}</p>
              <p>${data.message}</p>`
    };
    smtpTransport.sendMail(mailOptions,
      (error, response) => {
        if(error) {
          res.send(error)
        }else {
          res.send('Success')
        }
        smtpTransport.close();
      });
  }
};

module.exports = controller;