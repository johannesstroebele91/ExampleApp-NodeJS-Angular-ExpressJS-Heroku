const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const server = http.createServer(app);

app.use(express.static(path.join(__dirname + 'dist')));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});

app.set('port', port);


server.listen(port,() => console.log('Running...'));
