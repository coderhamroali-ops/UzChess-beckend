"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthorsModule", {
    enumerable: true,
    get: function() {
        return AuthorsModule;
    }
});
const _common = require("@nestjs/common");
const _authorsadmincontroler = require("./authors/admin/authors.admin.controler");
const _createauthorshandler = require("./authors/admin/create-authors/create-authors.handler");
const _getallauthorshandler = require("./authors/public/get-all-authors/get-all-authors.handler");
const _updateauthorshandler = require("./authors/admin/update-authors/update-authors.handler");
const _deleteauthorshandler = require("./authors/admin/delete-authors/delete-authors.handler");
const _getallauthorshandler1 = require("./authors/admin/get-all-authors/get-all-authors.handler");
const _authorspubliccontroller = require("./authors/public/authors-public.controller");
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
let AuthorsModule = class AuthorsModule {
};
AuthorsModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _authorsadmincontroler.AuthorsAdminControler,
            _authorspubliccontroller.AuthorsPublicController
        ],
        providers: [
            _createauthorshandler.CreateAuthorsHandler,
            _getallauthorshandler1.GetAllAuthorsHandler,
            _updateauthorshandler.UpdateAuthorsHandler,
            _deleteauthorshandler.DeleteAuthorsHandler,
            _getallauthorshandler.GetAllAuthorsHandlerP
        ]
    })
], AuthorsModule);

//# sourceMappingURL=authors.module.js.map