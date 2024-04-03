"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbPassword = process.env.DB_PASSWORD || '';
const customLogger = (msg) => {
    console.log('Sequelize log:', msg);
};
exports.sequelize = new sequelize_1.Sequelize('sprint6', 'root', dbPassword, {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: customLogger
});
//# sourceMappingURL=database.js.map