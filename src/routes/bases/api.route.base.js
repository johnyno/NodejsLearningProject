"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiRouteBase {
    constructor() {
    }
    get(req, res, object, options) {
        //add constants
        res.locals.BASE_URL = "/";
        if (object == null)
            throw new Error('Returned object cant be null');
        res.json(object);
    }
}
exports.ApiRouteBase = ApiRouteBase;
//# sourceMappingURL=api.route.base.js.map