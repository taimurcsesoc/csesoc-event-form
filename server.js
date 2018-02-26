const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');


const port = 3001;
const app = express();
app.use(bodyParser.json());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));


//catch-all that sends back the react app's index.html 
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.post('/api/send-emails/', (req, res) => {
	let transporter  = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'events.form@csesoc.org.au',
			pass: 'ninety9.60'
		},
	});

	req.body.forEach(element => {
		let mailOptions = {
			from: 'CSESoc Events <events.form@csesoc.org.au>',
			to: element.recipient,
			subject: element.subject,
			html: element.html 
		};
		
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				console.log(err);
			} else {
				console.log(info); 
			}
		});
	})
	res.send("emails sent successfully");
});

app.listen(port, () => console.log(`server started on port ${port}`));