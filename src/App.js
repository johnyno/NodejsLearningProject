"use strict";
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const genres_api_1 = require('./routes/genres.api');
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
        this.express.use('/api', new genres_api_1.GenresRouter().getRouter());
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
//# sourceMappingURL=App.js.map