"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteCartItemsHandler", {
    enumerable: true,
    get: function() {
        return DeleteCartItemsHandler;
    }
});
const _common = require("@nestjs/common");
const _cartItemsentities = require("../../../entities/cartItems.entities");
let DeleteCartItemsHandler = class DeleteCartItemsHandler {
    async execute(id) {
        const item = await _cartItemsentities.CartItemsEntity.findOneBy({
            id
        });
        if (!item) {
            throw new _common.NotFoundException('Cart item not found');
        }
        return await _cartItemsentities.CartItemsEntity.remove(item);
    }
};

//# sourceMappingURL=delete-cartItems.handler.js.map