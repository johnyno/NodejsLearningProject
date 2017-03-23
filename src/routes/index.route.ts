import { NextFunction, Request, Response, Router } from "express";
import { HtmlRouteBase } from "./bases/html.route.base";
import {ApiRouteBase} from "./bases/api.route.base";


export class IndexRoute extends HtmlRouteBase {

    constructor() {
        super();
    }

    public static create(router: Router) {
        //log
        console.log("[IndexApi::create] Creating index route.");

        //add home page route
        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });
    }


    public index(req: Request, res: Response, next: NextFunction) {
        //set custom title
         this.title = "Home | Johnyno's first application";

        //set options
        let options: Object = {
            "message": "Welcome to the Johnyno's first application"
        };

        //render template
        this.render(req, res,"index" , options);

    }
}