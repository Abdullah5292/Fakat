const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "contactmanager29@gmail.com",
        pass: "qffu ialg uwpd nxvy"
    }
});

module.exports = transporter;
