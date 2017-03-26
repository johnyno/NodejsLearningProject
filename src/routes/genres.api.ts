import {Router, Request, Response, NextFunction} from 'express';
import {DbModel} from './../models/model';
import {ApiRouteBase} from "./bases/api.route.base";
import "reflect-metadata";
import { inject } from "inversify";
import {IDbModel} from "../interfaces/model";
import {TYPES} from "../types/TYPES";


export class GenresApi extends ApiRouteBase{


  private dbModel:IDbModel;

  constructor() {
   super();
  }


  public create(router: Router, dbModel:IDbModel):void {

      this.dbModel = dbModel;
    //log
    console.log("[GenresApi::create] Creating index route.");

    //add home page route
    router.get("/genres", (req: Request, res: Response, next: NextFunction) => {
     this.index(req, res, next);
    });
  }


  private index(req: Request, res: Response, next: NextFunction):void {
    //set custom title
    // this.title = "Home | Johnyno's first application";

    try{

      this.getGenres((err, genres) =>{
            if(err){
              throw err;
            }
            res.json(genres);
          },
          20);


    }catch(e){
      console.log("model error ");

    }


  }

    private getGenres(callback, limit):void{
        this.dbModel.genre.find(callback).limit(limit);
    }

    private addGenre(callback, genre):void{
        this.dbModel.genre.create(genre, callback);
    }

    private updateGenre(callback, id, genre, options):void{
        const query = {_id:id};
        const update = {
            name: genre.name
        }
        this.dbModel.genre.findOneAndUpdate(query, update, options, callback);
    }

    private removeGenre(callback, id){
        const query = {_id:id};
        this.dbModel.genre.remove(query, callback);
    }

}

export default GenresApi;
