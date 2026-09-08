"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NewsModule", {
    enumerable: true,
    get: function() {
        return NewsModule;
    }
});
const _common = require("@nestjs/common");
const _newsadmincontroller = require("./news/admin/news-admin.controller");
const _createnewshandler = require("./news/admin/create-news/create-news.handler");
const _getallnewshandler = require("./news/admin/get-all-news/get-all-news.handler");
const _updatenewshandler = require("./news/admin/update-news/update-news.handler");
const _deletenewshandler = require("./news/admin/delete-news/delete-news.handler");
const _newspubliccontroller = require("./news/public/news-public-controller");
const _getallnewshandler1 = require("./news/public/get-all-news/get-all-news.handler");
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
let NewsModule = class NewsModule {
};
NewsModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _newsadmincontroller.NewsAdminController,
            _newspubliccontroller.NewsPublicController
        ],
        providers: [
            _createnewshandler.CreateNewsHandler,
            _getallnewshandler.GetAllNewsHandler,
            _updatenewshandler.UpdateNewsHandler,
            _deletenewshandler.DeleteNewsHandler,
            _getallnewshandler1.GetAllNewsHandlerPub
        ]
    })
], NewsModule);

//# sourceMappingURL=news.module.js.map