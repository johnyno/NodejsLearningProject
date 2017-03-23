"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HtmlRouteBase {
    constructor() {
        //initialize variables
        this.title = "Tour of Heros";
        this.scripts = [];
    }
    addScript(src) {
        this.scripts.push(src);
        return this;
    }
    render(req, res, view, options) {
        //add constants
        res.locals.BASE_URL = "/";
        //add scripts
        res.locals.scripts = this.scripts;
        //add title
        res.locals.title = this.title;
        //render view
        res.render(view, options);
    }
}
exports.HtmlRouteBase = HtmlRouteBase;
//# sourceMappingURL=html.route.base.js.map