const express = require('express'); // import module 'express' and declare/assign it to express
const artistListArray = require('./modules/artist');
const songListArray = require('./modules/songs');
const albumsListArray = require('./modules/albums');

const app = express(); // call express function and declare/assign to app
const PORT = 5000; // declare const PORT as 5000 to be used later

app.use(express.static('server/public')); //enhances app(or express()) to run static files from the base route

app.get('/artist', (req, res) => {
  // when the server is hit at the artist route
  res.send(artistListArray); // send back the artistListArray in response
});

// TODO - Add GET for songs
app.get('/song', (req, res) => {
  res.send(songListArray);
});

app.get('/albums', (req, res) => {
  res.send(albumsListArray);
});

app.listen(PORT, () => {
  // tells express to open a server and listen
  console.log('listening on port', PORT); // for a connection on previously defined PORT
});
