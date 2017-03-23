import * as mongoose from 'mongoose';

export class GenreModel {

	dbModel;

	constructor(){

		this.dbModel = mongoose.model('Genre',new mongoose.Schema({
														name:{
															type: String,
															require:true
														},
														create_date:{
															type: Date, 
															default: Date.now
														}
															}));
	}

	public getGenres(callback, limit):void{
		this.dbModel.find(callback).limit(limit);
	}

	public addGenre(callback, genre):void{
		this.dbModel.create(genre, callback);
	}

	public updateGenre(callback, id, genre, options):void{
		const query = {_id:id};
		const update = {
			name: genre.name
		}
		this.dbModel.findOneAndUpdate(query, update, options, callback);
	}

	public removeGenre(callback, id){
		const query = {_id:id};
		this.dbModel.remove(query, callback);
	}
}

export default GenreModel;