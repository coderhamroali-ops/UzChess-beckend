"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreatePurchasedCoursesRequest", {
    enumerable: true,
    get: function() {
        return CreatePurchasedCoursesRequest;
    }
});
const _classvalidator = require("class-validator");
const _swagger = require("@nestjs/swagger");
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
let CreatePurchasedCoursesRequest = class CreatePurchasedCoursesRequest {
};
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.Min)(1),
    _ts_metadata("design:type", Number)
], CreatePurchasedCoursesRequest.prototype, "userId", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.Min)(1),
    _ts_metadata("design:type", Number)
], CreatePurchasedCoursesRequest.prototype, "courseId", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsBoolean)(),
    _ts_metadata("design:type", Boolean)
], CreatePurchasedCoursesRequest.prototype, "isCompleted", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsDateString)(),
    _ts_metadata("design:type", String)
], CreatePurchasedCoursesRequest.prototype, "date", void 0);

//# sourceMappingURL=create-purchasedCourses.request.js.map