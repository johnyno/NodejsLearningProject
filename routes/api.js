const express = require('express');
const router = express.Router();

 

 const Genre = require('./../models/genre');
 const Book = require('./../models/book');

router.get('/', function(req, res){
	//console.log('GET request');
	res.send('Please use specific api route');
});

router.get('/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});
});


router.get('/books', function(req, res){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
	});
});

router.get('/books/:_id', function(req, res){
	Book.getBookById(function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	},
	req.params._id
	);
});


router.post('/genres', function(req, res){
	const genre = req.body;
	Genre.addGenre(function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	},
	genre
	);
});

router.post('/books', function(req, res){
	const book = req.body;
	Book.addBook(function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	},
	book
	);
});


router.put('/genres/:_id', function(req, res){
	const id = req.params._id;
	const genre = req.body;
	Genre.updateGenre(function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	},
	id,genre,{}
	);
});


router.delete('/genres/:_id', function(req, res){
	const id = req.params._id;
	Genre.removeGenre(function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	},
	id
	);
});

router.put('/ninjas/:id', function(req, res){
	res.send({type:'PUT'});
});

router.delete('/ninjas/:id', function(req, res){
	res.send({type:'DELETE'});
});


module.exports = router;
