/*************************************************/
/*		Trevor Edewaard, CS336, Lab03	*/
/************************************************/
/*App starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.
*/

var express = require('express');
var app = express();

app.use(express.static('Static'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
