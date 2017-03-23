import { NextFunction, Request, Response } from "express";


export class ApiRouteBase {


    constructor() {
    }



    public get(req: Request, res: Response,object:Object, options?: Object):void {
        //add constants
        res.locals.BASE_URL = "/";

      if(object == null)
          throw new Error('Returned object cant be null');

      res.json(object);


    }
}