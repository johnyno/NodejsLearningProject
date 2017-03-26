import { Schema } from "mongoose";

export var UserSchema: Schema = new Schema({
    createdAt: Date,
    email: String,
    firstName: String,
    lastName: String
});


UserSchema.pre("save", function(next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    next();
});