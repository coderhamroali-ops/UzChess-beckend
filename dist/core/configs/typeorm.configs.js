"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "typeormConfigs", {
    enumerable: true,
    get: function() {
        return typeormConfigs;
    }
});
const typeormConfigs = {
    type: 'postgres',
    url: 'postgres://postgres:123@localhost:5432/uzchess-bekend',
    entities: [
        'dist/**/*.entities.js'
    ],
    autoLoadEntities: true,
    synchronize: false
};

//# sourceMappingURL=typeorm.configs.js.map