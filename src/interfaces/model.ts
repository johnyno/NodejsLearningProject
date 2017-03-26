import { Model } from "mongoose";
import { IUserModel } from "./user.model";
import { IGenreModel } from "./genre.model";


export interface IDbModel {

    user: Model<IUserModel>;

    genre: Model<IGenreModel>;
}