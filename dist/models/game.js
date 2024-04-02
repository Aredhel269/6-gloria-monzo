"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const player_1 = __importDefault(require("./player"));
class Game extends sequelize_1.Model {
    static associate() {
        Game.belongsTo(player_1.default, { foreignKey: 'playerId' });
    }
}
Game.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    playerId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    dice1: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    dice2: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    isWin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    tableName: 'games',
    sequelize: database_1.sequelize,
});
exports.default = Game;
//# sourceMappingURL=game.js.map