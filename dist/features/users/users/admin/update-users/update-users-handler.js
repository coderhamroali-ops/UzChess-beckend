"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateUsersHandler", {
    enumerable: true,
    get: function() {
        return UpdateUsersHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _usersentities = require("../../../entities/users.entities");
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
let UpdateUsersHandler = class UpdateUsersHandler {
    async execute(id, payload) {
        const user = await _usersentities.UsersEntities.findOneBy({
            id: id
        });
        if (!user) {
            throw new _common.NotFoundException('User not found');
        }
        const loginExists = await _usersentities.UsersEntities.exists({
            where: {
                id: (0, _typeorm.Not)(user.id),
                login: (0, _typeorm.ILike)(payload.login)
            }
        });
        if (loginExists) {
            throw new _common.ConflictException('Login already exists');
        }
        user.role = payload.role;
        user.fullName = payload.fullName;
        user.profileImage = payload.profileImage;
        user.login = payload.login;
        user.loginType = payload.loginType;
        user.password = payload.password;
        user.birthDate = payload.birthDate;
        user.isVerified = payload.isVerified;
        user.isActive = payload.isActive;
        return await _usersentities.UsersEntities.save(user);
    }
};
UpdateUsersHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateUsersHandler);

//# sourceMappingURL=update-users-handler.js.map