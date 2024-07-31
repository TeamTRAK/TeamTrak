require('dotenv').config();
var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_ID,
		pass: process.env.EMAIL_PASSWORD
	}
});

const post = (req, res) => {
	const data = req.body;
	let mailOptions = {
		from: process.env.EMAIL_ID,
		to: process.env.EMAIL_ID,
		subject: data.subject,
		text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
	};
	transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent: ' + info.response);
        return res.status(200).send('Email sent successfully');
    });
}

module.exports = {
	post
};
