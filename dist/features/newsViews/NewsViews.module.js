"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NewsViewsModule", {
    enumerable: true,
    get: function() {
        return NewsViewsModule;
    }
});
const _common = require("@nestjs/common");
const _NewsViewsadmincontroller = require("./newsViews/admin/NewsViews.admin.controller");
const _createnewsViewshandler = require("./newsViews/admin/creare-newsViews/create-newsViews.handler");
const _getallNewsViewshandler = require("./newsViews/admin/get-all-newsViews/get-all-NewsViews.handler");
const _updateNewsViewshandler = require("./newsViews/admin/update-newsViews/update-NewsViews.handler");
const _deleteNewsViewshandler = require("./newsViews/admin/delete-newsViews/delete-NewsViews.handler");
const _NewsViewspubliccontroller = require("./newsViews/public/NewsViews.public.controller");
const _getallNewsViewshandler1 = require("./newsViews/public/get-all-NewsViews/get-all-NewsViews.handler");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let NewsViewsModule = class NewsViewsModule {
};
NewsViewsModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _NewsViewsadmincontroller.NewsViewsAdminController,
            _NewsViewspubliccontroller.NewsViewsPublicController
        ],
        providers: [
            _createnewsViewshandler.CreateNewsViewsHandler,
            _getallNewsViewshandler.GetAllNewsViewsHandler,
            _updateNewsViewshandler.UpdateNewsViewsHandler,
            _deleteNewsViewshandler.DeleteNewsViewsHandler,
            _getallNewsViewshandler1.GetAllNewsViewsHandlerPub
        ]
    })
], NewsViewsModule);

//# sourceMappingURL=NewsViews.module.js.map