import { Document } from "mongoose";
import { IGenre } from "./genre";

export interface IGenreModel extends IGenre, Document {
    //custom methods for your model would be defined here
}