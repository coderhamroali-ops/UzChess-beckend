"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateUsersHandler", {
    enumerable: true,
    get: function() {
        return CreateUsersHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
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
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let CreateUsersHandler = class CreateUsersHandler {
    async execute(payload) {
        const loginExists = await this.usersRepository.existsBy({
            login: (0, _typeorm1.ILike)(payload.login)
        });
        if (loginExists) {
            throw new _common.ConflictException('Login already exists');
        }
        const newUser = this.usersRepository.create({
            role: payload.role,
            fullName: payload.fullName,
            profileImage: payload.profileImage,
            login: payload.login,
            loginType: payload.loginType,
            password: payload.password,
            birthDate: payload.birthDate,
            isVerified: payload.isVerified ?? false,
            isActive: payload.isActive ?? false
        });
        return await this.usersRepository.save(newUser);
    }
    constructor(usersRepository){
        this.usersRepository = usersRepository;
    }
};
CreateUsersHandler = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_usersentities.UsersEntities)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository
    ])
], CreateUsersHandler);

//# sourceMappingURL=create-users.handler.js.map