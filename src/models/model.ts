import {IDbModel} from "../interfaces/model";
import {IUserModel} from "../interfaces/user.model";
import {IGenreModel} from "../interfaces/genre.model";
import {Model} from 'mongoose';
import { injectable } from "inversify";


@injectable()
export class DbModel implements IDbModel{
    user: Model<IUserModel>;

    genre: Model<IGenreModel>;
}