const mongoose = require('mongoose');


//Genre Schema
const bookSchema = mongoose.Schema({
	title:{
		type: String,
		require:true
	},
	genre:{
		type: String,
		require:true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		require:true
	},
	publisher:{
		type: String
	},
	create_date:{
		type: Date, 
		default: Date.now
	}
});


const Book = module.exports= mongoose.model('Book',bookSchema);

//Get Genres

module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit);
} 

module.exports.getBookById = function(callback, id){
	Book.findById(id,callback);
} 

module.exports.addBook = function(callback, book){
	Book.create(book, callback);
}