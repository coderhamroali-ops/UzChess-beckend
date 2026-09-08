"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateCartItemsHandler", {
    enumerable: true,
    get: function() {
        return CreateCartItemsHandler;
    }
});
const _common = require("@nestjs/common");
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
let CreateCartItemsHandler = class CreateCartItemsHandler {
    async execute(payload) {
        const itemExists = await _cartItemsentities.CartItemsEntity.exists({
            where: {
                userId: payload.userId,
                target: payload.target,
                targetId: payload.targetId
            }
        });
        if (itemExists) {
            throw new _common.ConflictException('This item already exists in cart');
        }
        const newItem = _cartItemsentities.CartItemsEntity.create({
            userId: payload.userId,
            target: payload.target,
            targetId: payload.targetId,
            quantity: payload.quantity
        });
        return await _cartItemsentities.CartItemsEntity.save(newItem);
    }
};
CreateCartItemsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateCartItemsHandler);

//# sourceMappingURL=create-cartItems.handler.js.map