import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import mongoose = require("mongoose");


import {IndexRoute} from './routes/index.route';
import {GenresApi} from './routes/genres.api';

//interfaces
import { IUser } from "./interfaces/user"; //import IUser
import { IDbModel } from "./interfaces/model";
import { IUserModel } from "./interfaces/user.model";

import {DbModel} from './models/model'

//schemas
import { UserSchema } from "./schemas/user";
import {IGenreModel} from "./interfaces/genre.model";
import {GenreSchema} from "./schemas/genre"; //import userSchema

import { inject } from "inversify";
import {TYPES} from "./types/TYPES";


export class Application {

    private static server:Application;

    public app: express.Application;

  //  private model: IApplicationModel;
    private dbModel:IDbModel;


    public constructor(@inject(TYPES.IDbModel) dbModel: IDbModel) {

        this.dbModel = dbModel;

        this.app = express();

        this.config();

        this.routes();

        this.api();
    }


    public api() {
        //empty for now
    }


    private config() {
        //add static paths
        const MONGODB_CONNECTION: string = "mongodb://localhost:27017/mongodblearning";

        //add static paths
        this.app.use(express.static(path.join(__dirname, "public")));

        //configure pug
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "pug");

        //mount logger
        this.app.use(logger("dev"));

        //mount json form parser
        this.app.use(bodyParser.json());

        //mount query string parser
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        //mount cookie parker
        this.app.use(cookieParser("SECRET_GOES_HERE"));

        //mount override
        this.app.use(methodOverride());

        //use q promises
        global.Promise = require("q").Promise;
        mongoose.Promise = global.Promise;

        //connect to mongoose
        let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);



        //create models
        this.dbModel.user = connection.model<IUserModel>("User", UserSchema);
        this.dbModel.genre = connection.model<IGenreModel>("Genre", GenreSchema);

        // catch 404 and forward to error handler
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });

        //error handling
        this.app.use(errorHandler());

    }


    public routes() {
        let router: express.Router
        router = express.Router();

        //IndexRoute
        IndexRoute.create(router);

        new GenresApi().create(router, this.dbModel);
        //use router middleware
        this.app.use(router);
    }

}