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
const _bcrypt = /*#__PURE__*/ _interop_require_wildcard(require("bcrypt"));
const _usersentities = require("../../../entities/users.entities");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
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
        if (payload.password) {
            user.password = await _bcrypt.hash(payload.password, 10);
        }
        user.birthDate = payload.birthDate;
        user.isVerified = payload.isVerified;
        user.isActive = payload.isActive;
        const saved = await _usersentities.UsersEntities.save(user);
        const { password, ...result } = saved;
        return result;
    }
};
UpdateUsersHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateUsersHandler);

//# sourceMappingURL=update-users-handler.js.map