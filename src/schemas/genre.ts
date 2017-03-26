import { Schema } from "mongoose";
import {strictEqual} from "assert";

export var GenreSchema: Schema = new Schema({
    name:{
        type: String,
        require:true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});