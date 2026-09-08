"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateMatchesRequest", {
    enumerable: true,
    get: function() {
        return UpdateMatchesRequest;
    }
});
const _classvalidator = require("class-validator");
const _swagger = require("@nestjs/swagger");
const _enum = require("../../../../../core/enum/enum");
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
let UpdateMatchesRequest = class UpdateMatchesRequest {
};
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.Min)(1),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateMatchesRequest.prototype, "firstPlayer", void 0);
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.Min)(1),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateMatchesRequest.prototype, "firstPlayerResult", void 0);
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.Min)(1),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateMatchesRequest.prototype, "secondPlayer", void 0);
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.Min)(1),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateMatchesRequest.prototype, "secondPlayerResult", void 0);
_ts_decorate([
    (0, _classvalidator.IsEnum)(_enum.MatchType),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", typeof _enum.MatchType === "undefined" ? Object : _enum.MatchType)
], UpdateMatchesRequest.prototype, "type", void 0);
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.Min)(1),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateMatchesRequest.prototype, "moves", void 0);
_ts_decorate([
    (0, _classvalidator.IsDateString)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], UpdateMatchesRequest.prototype, "date", void 0);
_ts_decorate([
    (0, _classvalidator.IsEnum)(_enum.winnerType),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", typeof _enum.winnerType === "undefined" ? Object : _enum.winnerType)
], UpdateMatchesRequest.prototype, "winner", void 0);

//# sourceMappingURL=update-matches.request.js.map