"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateCartItemsHandler", {
    enumerable: true,
    get: function() {
        return UpdateCartItemsHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _cartItemsentities = require("../../../entities/cartItems.entities");
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
let UpdateCartItemsHandler = class UpdateCartItemsHandler {
    async execute(id, payload) {
        const item = await _cartItemsentities.CartItemsEntity.findOneBy({
            id
        });
        if (!item) {
            throw new _common.NotFoundException('Cart item not found');
        }
        const itemExists = await _cartItemsentities.CartItemsEntity.exists({
            where: {
                id: (0, _typeorm.Not)(item.id),
                userId: payload.userId,
                target: payload.target,
                targetId: payload.targetId
            }
        });
        if (itemExists) {
            throw new _common.ConflictException('This item already exists in cart');
        }
        item.userId = payload.userId;
        item.target = payload.target;
        item.targetId = payload.targetId;
        item.quantity = payload.quantity;
        return await _cartItemsentities.CartItemsEntity.save(item);
    }
};
UpdateCartItemsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateCartItemsHandler);

//# sourceMappingURL=update-cartItems.handler.js.map