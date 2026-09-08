"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersModule", {
    enumerable: true,
    get: function() {
        return UsersModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _usersadmincontroller = require("./users/admin/users-admin-controller");
const _usersentities = require("./entities/users.entities");
const _userspubliccontroller = require("./users/public/users-public-controller");
const _createusershandler = require("./users/admin/create-users/create-users.handler");
const _getallusershandler = require("./users/admin/get-all-user/get-all-users.handler");
const _updateusershandler = require("./users/admin/update-users/update-users-handler");
const _deleteusershandler = require("./users/admin/delete-users/delete-users.handler");
const _getallusershandler1 = require("./users/public/get-all-user/get-all-users.handler");
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
let UsersModule = class UsersModule {
};
UsersModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _usersentities.UsersEntities
            ])
        ],
        controllers: [
            _usersadmincontroller.UsersAdminController,
            _userspubliccontroller.UsersPublicController
        ],
        providers: [
            _createusershandler.CreateUsersHandler,
            _getallusershandler.GetAllUsersHandler,
            _updateusershandler.UpdateUsersHandler,
            _deleteusershandler.DeleteUsersHandler,
            _getallusershandler1.GetAllUsersHandlerPub
        ]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map