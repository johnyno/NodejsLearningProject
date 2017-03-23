import {Router, Request, Response, NextFunction} from 'express';
import {GenreModel} from './../models/genre.model';


export class GenresRouter {
  private router: Router
  private model:GenreModel;

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
    this.model = new GenreModel();
  }

  private init() {
    this.router.get('/genres', this.getAll);

    this.router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      })});
  }


  public getAll(req: Request, res: Response, next: NextFunction):void {
    try{
      let model = new GenreModel();
      model.getGenres((err, genres) =>{
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

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */

  public getRouter(){
    return this.router;
  }

}

export default GenresRouter;
