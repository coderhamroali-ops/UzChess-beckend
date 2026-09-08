"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CoursesAdminController", {
    enumerable: true,
    get: function() {
        return CoursesAdminController;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _platformexpress = require("@nestjs/platform-express");
const _createcourseshandler = require("./create-courses/create-courses.handler");
const _createcoursesrequest = require("./create-courses/create-courses.request");
const _getallcourseshandler = require("./get-all-courses/get-all-courses.handler");
const _getallcoursesrequest = require("./get-all-courses/get-all-courses.request");
const _updatecourseshandler = require("./update-courses/update-courses.handler");
const _updatecoursesrequest = require("./update-courses/update-courses.request");
const _deletecourseshandler = require("./delete-courses/delete-courses.handler");
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
let CoursesAdminController = class CoursesAdminController {
    async create(payload, files) {
        return await this.createHandler.execute(payload.authorId, payload.categoryId, payload.languageId, payload.difficultyId, payload.title, files?.image?.[0], payload.price, payload.newPrice, payload.isPublished, payload.reviewsCount ?? 0, payload.rating, payload.sectionsCount, payload.lessonsCount);
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
    constructor(createHandler, getAllHandler, updateHandler, deleteHandler){
        this.createHandler = createHandler;
        this.getAllHandler = getAllHandler;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
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
                    example: 'Chess for Beginners'
                },
                image: {
                    type: 'string',
                    format: 'binary',
                    example: 'http/localhost:8000'
                },
                price: {
                    type: 'number',
                    example: 49.99
                },
                newPrice: {
                    type: 'number',
                    example: 39.99
                },
                isPublished: {
                    type: 'boolean',
                    example: true
                },
                rating: {
                    type: 'number',
                    example: 4.5
                },
                reviewsCount: {
                    type: 'number',
                    example: 10
                },
                sectionsCount: {
                    type: 'number',
                    example: 5
                },
                lessonsCount: {
                    type: 'number',
                    example: 25
                }
            },
            required: [
                'authorId',
                'categoryId',
                'languageId',
                'difficultyId',
                'title',
                'image',
                'price'
            ]
        }
    }),
    (0, _common.UseInterceptors)((0, _platformexpress.FileFieldsInterceptor)([
        {
            name: 'image',
            maxCount: 1
        }
    ], {
        storage: _multerconfigs.default
    })),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _common.UploadedFiles)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createcoursesrequest.CreateCoursesRequest === "undefined" ? Object : _createcoursesrequest.CreateCoursesRequest,
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], CoursesAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcoursesrequest.GetAllCoursesRequest === "undefined" ? Object : _getallcoursesrequest.GetAllCoursesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CoursesAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatecoursesrequest.UpdateCoursesRequest === "undefined" ? Object : _updatecoursesrequest.UpdateCoursesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CoursesAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], CoursesAdminController.prototype, "delete", null);
CoursesAdminController = _ts_decorate([
    (0, _common.Controller)('admin/courses'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createcourseshandler.CreateCoursesHandler === "undefined" ? Object : _createcourseshandler.CreateCoursesHandler,
        typeof _getallcourseshandler.GetAllCoursesHandler === "undefined" ? Object : _getallcourseshandler.GetAllCoursesHandler,
        typeof _updatecourseshandler.UpdateCoursesHandler === "undefined" ? Object : _updatecourseshandler.UpdateCoursesHandler,
        typeof _deletecourseshandler.DeleteCoursesHandler === "undefined" ? Object : _deletecourseshandler.DeleteCoursesHandler
    ])
], CoursesAdminController);

//# sourceMappingURL=courses-amin.controller.js.map