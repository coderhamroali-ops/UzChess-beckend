"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteUsersHandler", {
    enumerable: true,
    get: function() {
        return DeleteUsersHandler;
    }
});
const _common = require("@nestjs/common");
const _usersentities = require("../../../entities/users.entities");
let DeleteUsersHandler = class DeleteUsersHandler {
    async execute(id) {
        const user = await _usersentities.UsersEntities.findOneBy({
            id
        });
        if (!user) {
            throw new _common.NotFoundException('User not found');
        }
        return await _usersentities.UsersEntities.remove(user);
    }
};

//# sourceMappingURL=delete-users.handler.js.map