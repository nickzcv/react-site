const express = require('express');
const app = express();
const port = 8080;
const domain = 'http://localhost';
const colors = require('colors/safe');

app.use('/', express.static("./public"));

app.set('port', port);
app.listen(app.get('port') || port, function() {
  console.log(colors.green(`Main application: ${domain}:${app.get('port')}`));
});
