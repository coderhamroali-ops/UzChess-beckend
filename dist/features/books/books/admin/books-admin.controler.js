"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BooksAdminControler", {
    enumerable: true,
    get: function() {
        return BooksAdminControler;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _platformexpress = require("@nestjs/platform-express");
const _getallbookshandler = require("./get-all-books/get-all-books.handler");
const _createbookshandler = require("./create-book/create-books.handler");
const _createbooksrequest = require("./create-book/create-books.request");
const _getallbooksrequest = require("./get-all-books/get-all-books.request");
const _deletebookshandler = require("./delete-books/delete-books.handler");
const _updatebookshandler = require("./update-books/update-books.handler");
const _updatebooksrequest = require("./update-books/update-books.request");
const _multerconfigs = /*#__PURE__*/ _interop_require_default(require("../../../../core/configs/multer.configs"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
let BooksAdminControler = class BooksAdminControler {
    async create(payload, files) {
        return await this.createHandler.execute(payload.authorId, payload.categoryId, payload.languageId, payload.difficultyId, payload.title, payload.description, files?.image?.[0], payload.price, payload.newPrice, payload.rating, payload.reviewsCount ?? 0, payload.pages, payload.pubDate);
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
    constructor(createHandler, getAllHandler, deleteHandler, updateHandler){
        this.createHandler = createHandler;
        this.getAllHandler = getAllHandler;
        this.deleteHandler = deleteHandler;
        this.updateHandler = updateHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    (0, _swagger.ApiConsumes)('multipart/form-data'),
    (0, _swagger.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                authorId: {
                    type: 'number',
                    example: 1
                },
                categoryId: {
                    type: 'number',
                    example: 5
                },
                languageId: {
                    type: 'number',
                    example: 2
                },
                difficultyId: {
                    type: 'number',
                    example: 3
                },
                title: {
                    type: 'string',
                    example: 'Chess Fundamentals'
                },
                description: {
                    type: 'string',
                    example: 'Chessni o‘rganish uchun kitob'
                },
                image: {
                    type: 'string',
                    format: 'binary'
                },
                file: {
                    type: 'string',
                    format: 'binary'
                },
                price: {
                    type: 'number',
                    example: 25.99
                },
                newPrice: {
                    type: 'number',
                    example: 19.99
                },
                rating: {
                    type: 'number',
                    example: 4.5
                },
                reviewsCount: {
                    type: 'number',
                    example: 10
                },
                pages: {
                    type: 'number',
                    example: 250
                },
                pubDate: {
                    type: 'string',
                    format: 'date',
                    example: '2026-09-06'
                }
            },
            required: [
                'authorId',
                'categoryId',
                'languageId',
                'difficultyId',
                'title',
                'description',
                'image',
                'price',
                'pages',
                'pubDate'
            ]
        }
    }),
    (0, _common.UseInterceptors)((0, _platformexpress.FileFieldsInterceptor)([
        {
            name: 'image',
            maxCount: 1
        },
        {
            name: 'file',
            maxCount: 1
        }
    ], {
        storage: _multerconfigs.default
    })),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _common.UploadedFiles)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createbooksrequest.CreateBooksRequest === "undefined" ? Object : _createbooksrequest.CreateBooksRequest,
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], BooksAdminControler.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallbooksrequest.GetAllBooksRequest === "undefined" ? Object : _getallbooksrequest.GetAllBooksRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], BooksAdminControler.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatebooksrequest.UpdateBooksRequest === "undefined" ? Object : _updatebooksrequest.UpdateBooksRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], BooksAdminControler.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], BooksAdminControler.prototype, "delete", null);
BooksAdminControler = _ts_decorate([
    (0, _common.Controller)('admin/Books'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createbookshandler.CreateBooksHandler === "undefined" ? Object : _createbookshandler.CreateBooksHandler,
        typeof _getallbookshandler.GetAllBooksHandler === "undefined" ? Object : _getallbookshandler.GetAllBooksHandler,
        typeof _deletebookshandler.DeleteBooksHandler === "undefined" ? Object : _deletebookshandler.DeleteBooksHandler,
        typeof _updatebookshandler.UpdateBooksHandler === "undefined" ? Object : _updatebookshandler.UpdateBooksHandler
    ])
], BooksAdminControler);

//# sourceMappingURL=books-admin.controler.js.map