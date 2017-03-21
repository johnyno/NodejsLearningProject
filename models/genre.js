const mongoose = require('mongoose');


//Genre Schema
const genreSchema = mongoose.Schema({
	name:{
		type: String,
		require:true
	},
	create_date:{
		type: Date, 
		default: Date.now
	}
});


const Genre = module.exports = mongoose.model('Genre',genreSchema);

//Get Genres

module.exports.getGenres = function(callback, limit){
	Genre.find(callback).limit(limit);
}

module.exports.addGenre = function(callback, genre){
	Genre.create(genre, callback);
}

module.exports.updateGenre = function(callback, id, genre, options){
	const query = {_id:id};
	const update = {
		name: genre.name
	}

	Genre.findOneAndUpdate(query, update, options, callback);
}


module.exports.removeGenre = function(callback, id){
	const query = {_id:id};
	Genre.remove(query, callback);
}