"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersLessonsModule", {
    enumerable: true,
    get: function() {
        return UsersLessonsModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _users_lessonsentities = require("./entities/users_lessons.entities");
const _users_lessonsadmincontroller = require("./users_lessons/admin/users_lessons.admin.controller");
const _users_lessonspubliccontroller = require("./users_lessons/public/users_lessons-public.controller");
const _createusers_lessonshandler = require("./users_lessons/admin/create-users_lessons/create-users_lessons.handler");
const _getallusers_lessonshandler = require("./users_lessons/admin/get-all-users_lessons/get-all-users_lessons.handler");
const _getallusers_lessonshandler1 = require("./users_lessons/public/get-all-users_lessons/get-all-users_lessons.handler");
const _updateusers_lessonshandler = require("./users_lessons/admin/update-users_lessons/update-users_lessons.handler");
const _deleteusers_lessonshandler = require("./users_lessons/admin/delete-users_lessons/delete-users_lessons.handler");
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
let UsersLessonsModule = class UsersLessonsModule {
};
UsersLessonsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _users_lessonsentities.UsersLessonsEntity
            ])
        ],
        controllers: [
            _users_lessonsadmincontroller.UsersLessonsAdminController,
            _users_lessonspubliccontroller.UsersLessonsPublicController
        ],
        providers: [
            _createusers_lessonshandler.CreateUsersLessonsHandler,
            _getallusers_lessonshandler.GetAllUsersLessonsHandler,
            _getallusers_lessonshandler1.GetAllUsersLessonsHandlerPub,
            _updateusers_lessonshandler.UpdateUsersLessonsHandler,
            _deleteusers_lessonshandler.DeleteUsersLessonsHandler
        ]
    })
], UsersLessonsModule);

//# sourceMappingURL=users_lessons.module.js.map