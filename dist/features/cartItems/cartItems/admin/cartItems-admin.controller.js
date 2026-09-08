"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CartItemsAdminController", {
    enumerable: true,
    get: function() {
        return CartItemsAdminController;
    }
});
const _common = require("@nestjs/common");
const _getallcartItemshandler = require("./get-all-cartItems/get-all-cartItems.handler");
const _createcartItemshandler = require("./create-cartItems/create-cartItems.handler");
const _updatecartItemshandler = require("./update-cartItems/update-cartItems.handler");
const _deletecartItemshandler = require("./delete-cartItems/delete-cartItems.handler");
const _createcartItemsrequest = require("./create-cartItems/create-cartItems.request");
const _getallcartItemsrequest = require("./get-all-cartItems/get-all-cartItems.request");
const _updatecartItemsrequest = require("./update-cartItems/update-cartItems.request");
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
let CartItemsAdminController = class CartItemsAdminController {
    async create(payload) {
        return await this.createItem.execute(payload);
    }
    async getAll(filter) {
        return await this.getAllHandler.execute(filter);
    }
    async update(id, payload) {
        return await this.updateHandler.execute(id, payload);
    }
    async delete(id) {
        return await this.deleteHandler.execute(id);
    }
    constructor(getAllHandler, createItem, updateHandler, deleteHandler){
        this.getAllHandler = getAllHandler;
        this.createItem = createItem;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createcartItemsrequest.CreateCartItemsRequest === "undefined" ? Object : _createcartItemsrequest.CreateCartItemsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CartItemsAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcartItemsrequest.GetAllCartItemsRequest === "undefined" ? Object : _getallcartItemsrequest.GetAllCartItemsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CartItemsAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatecartItemsrequest.UpdateCartItemsRequest === "undefined" ? Object : _updatecartItemsrequest.UpdateCartItemsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CartItemsAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], CartItemsAdminController.prototype, "delete", null);
CartItemsAdminController = _ts_decorate([
    (0, _common.Controller)('admin/cart-items'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcartItemshandler.GetAllCartItemsHandler === "undefined" ? Object : _getallcartItemshandler.GetAllCartItemsHandler,
        typeof _createcartItemshandler.CreateCartItemsHandler === "undefined" ? Object : _createcartItemshandler.CreateCartItemsHandler,
        typeof _updatecartItemshandler.UpdateCartItemsHandler === "undefined" ? Object : _updatecartItemshandler.UpdateCartItemsHandler,
        typeof _deletecartItemshandler.DeleteCartItemsHandler === "undefined" ? Object : _deletecartItemshandler.DeleteCartItemsHandler
    ])
], CartItemsAdminController);

//# sourceMappingURL=cartItems-admin.controller.js.map