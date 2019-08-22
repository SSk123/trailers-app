var express = require('express');
var app = express();
// var path = require('path');
var bodyParser = require('body-parser');
const axios = require('axios');
const trailerJSON = {};

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/getTrailers', function (req, res) {
  res.send(200, 'Hello Everyone');
});

app.get('/getLanguages', function(req, res) {
    res.send(200, trailerJSON.language)
})

app.get('/getGenres', function(req, res) {
    res.send(200, trailerJSON.genre)
})

app.get('/getMovies', function(req, res) {
    res.send(200, trailerJSON.movies)
})

function getMovieGenres(movieMap) {
    const genre = [];
    Object.values(movieMap).map(movie => {
        const {EventGenre: genres} = movie;
        const genreList = genres.split('|');
        genreList.forEach(mGenre => { if(genre.indexOf(mGenre) < 0)  genre.push(mGenre) })
    })
    console.log('Genres: ', genre)
    return genre;
}
function getMoviesList(data) {return data}


app.listen(3001, function() {
  console.log('Trying fetch data from bookmyshow');
  const url = 'https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs';
  axios(url).then(function(res) {
      console.log(res.data[0])
      trailerJSON.language = res.data[0];
      trailerJSON.genre = getMovieGenres(res.data[1]);
      trailerJSON.movies = getMoviesList(res.data[1]);
    })
    .catch(function(err) {new Error(err)})

});

