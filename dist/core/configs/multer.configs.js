"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _multer = require("multer");
const _fs = /*#__PURE__*/ _interop_require_wildcard(require("fs"));
const _common = require("@nestjs/common");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function getFileType(mime) {
    switch(mime){
        case 'image/jpeg':
        case 'image/png':
        case 'image/gif':
            return 'image';
        case 'application/pdf':
            return 'document';
        default:
            return 'file';
    }
}
const storageOptions = (0, _multer.diskStorage)({
    destination: (req, file, cb)=>{
        const subFolder = getFileType(file.mimetype);
        const destination = `./uploads/${subFolder}`;
        if (!_fs.existsSync(destination)) {
            _fs.mkdirSync(destination, {
                recursive: true
            });
        }
        cb(null, destination);
    },
    filename: (req, file, cb)=>{
        const extension = file.originalname.split('.').pop();
        if (!extension) {
            return cb(new _common.BadRequestException('File does not have extension'), '');
        }
        const prefix = getFileType(file.mimetype);
        const fileName = `${prefix}_${Date.now()}.${extension}`;
        return cb(null, fileName);
    }
});
const _default = storageOptions;

//# sourceMappingURL=multer.configs.js.map