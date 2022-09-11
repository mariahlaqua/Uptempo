const express = require('express');
const app = express();

// dotenv config
require('dotenv').config({ path: './config/.env' });

app.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});
