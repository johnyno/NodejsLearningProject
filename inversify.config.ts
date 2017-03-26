import { Container } from "inversify";
import {IDbModel} from "./src/interfaces/model";
import {DbModel} from "./src/models/model";
import {TYPES} from "./src/types/TYPES";


const container = new Container();

container.bind<IDbModel>(TYPES.IDbModel).to(DbModel);

export { container };