"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get Requires () {
        return Requires;
    },
    get RequiresKey () {
        return RequiresKey;
    }
});
const _common = require("@nestjs/common");
const RequiresKey = 'requires';
const Requires = (permission)=>(0, _common.SetMetadata)(RequiresKey, permission);

//# sourceMappingURL=requires.decorator.js.map