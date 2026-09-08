"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CartItemsModule", {
    enumerable: true,
    get: function() {
        return CartItemsModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _cartItemsentities = require("./entities/cartItems.entities");
const _cartItemsadmincontroller = require("./cartItems/admin/cartItems-admin.controller");
const _cartItemspubliccontroller = require("./cartItems/public/cartItems-public.controller");
const _createcartItemshandler = require("./cartItems/admin/create-cartItems/create-cartItems.handler");
const _getallcartItemshandler = require("./cartItems/admin/get-all-cartItems/get-all-cartItems.handler");
const _getallcartItemshandler1 = require("./cartItems/public/get-all-cartItems/get-all-cartItems.handler");
const _updatecartItemshandler = require("./cartItems/admin/update-cartItems/update-cartItems.handler");
const _deletecartItemshandler = require("./cartItems/admin/delete-cartItems/delete-cartItems.handler");
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
let CartItemsModule = class CartItemsModule {
};
CartItemsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _cartItemsentities.CartItemsEntity
            ])
        ],
        controllers: [
            _cartItemsadmincontroller.CartItemsAdminController,
            _cartItemspubliccontroller.CartItemsPublicController
        ],
        providers: [
            _createcartItemshandler.CreateCartItemsHandler,
            _getallcartItemshandler.GetAllCartItemsHandler,
            _getallcartItemshandler1.GetAllCartItemsHandlerPub,
            _updatecartItemshandler.UpdateCartItemsHandler,
            _deletecartItemshandler.DeleteCartItemsHandler
        ]
    })
], CartItemsModule);

//# sourceMappingURL=cartItems.module.js.map