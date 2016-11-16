/*************************************************/
/*		Trevor Edewaard, CS336, Lab03	*/
/************************************************/
/*App starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.
*/

/* a. Chrome only showed me that the get request works. For all others(post, put, delete, head) I used curl, which did indeed work.
The HEAD request through an error in curl saying to try using -I instead. I did this and it did display the appropriate header information and even gave a 200 code along with content length and type.
Chrome only worked with GET because it's only a browser that can send for information.
*/
// b. I believe the most appropriate HTTP response is 404 because the URL wasn't found. If a route isn't defined then it's not going to be found.

/* A. Forms support get and post but do not support delete and put.*/

/* B. It looks like it's getting passed back using POST as the Request Method. The form data is being passed back just as HTML and it only sends the data in the posted message box because that's all we care about. */

var express = require('express');
var app = express();
const bodyParser = require('body-parser')

const http_status = require('http-status-codes');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/request', function (req, res) {
	res.send('Got a GET request!');
});

app.post('/request', function (req, res) {
	res.send('Got a POST request');
});

app.post('/forms', function (req, res) {
	res.send('Posted Message: <code>' + req.body.user_message + '</code>');
});

app.put('/request', function (req, res) {
	res.send('Got a PUT request at /request');
});

app.delete('/request', function (req, res) {
	res.send('Got a DELETE request at /request');
});

app.head('/request', function (req, res) {
	res.send('Got a HEAD request at /request');
});

app.all('*', function (req, res) {
	res.sendStatus(417);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
