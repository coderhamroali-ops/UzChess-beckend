"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppDataSource", {
    enumerable: true,
    get: function() {
        return AppDataSource;
    }
});
const _typeorm = require("typeorm");
const AppDataSource = new _typeorm.DataSource({
    type: 'postgres',
    url: 'postgres://postgres:123@localhost:5432/dars603',
    entities: [
        'dist/**/*.entities.js'
    ],
    migrations: [
        "dist/migrations/*.js"
    ],
    synchronize: false
});

//# sourceMappingURL=data-sorce.js.map