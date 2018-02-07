const express = require('express');

const app = express();

const port = 5000;

app.get('/api/emails', (req, res) => {
	const customers = [
		{ id: 0, firstName: "John", lastName: "Doe" },
		{ id: 1, firstName: "Jane", lastName: "Doe" },
	]

	res.json(customers)
}) 

app.listen(port, () => console.log(`server started on port ${port}`))