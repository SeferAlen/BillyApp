const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/'));
app.listen(process.env.PORT || 8080);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});